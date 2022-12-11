import React, { Component } from 'react'
import './index.css'
import pubsub from 'pubsub-js'

export default class List extends Component {

    state = {
        users:[],          // users初始值为数组
        isFirst: true,     // 是否为第一次打开页面
        isLoading: false,  // 标识，是否处于加载中
        err: '' ,           // 存储请求相关的错误信息
    }

    // 这个钩子一般做初始化的事：开启定时器，订阅消息等
    // 重点: 1. 谁接收东西，谁就在componentDidMount 里面订阅消息。然后在componentWillUnmount 取消订阅
    //       2. 谁传送消息，谁就发布消息。
    componentDidMount() {
        this.token = pubsub.subscribe('subMess',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    // 当组件卸载时，停止订阅消息
    componentWillUnmount() {
        pubsub.unsubscribe(this.token)
    }

  render() { 
    const {users, isFirst, isLoading, err} = this.state

    return (
        <div className="row">
            {
                isFirst? <h2>欢迎使用，输入关键字，然后点击搜索</h2>:
                isLoading ? <h2> Loading....</h2> :
                err ? <h2 style={{color:'red'}}>{err}</h2> :
                users.map((userObj)=>{
                    return (
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="title" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
      </div>
    )
  }
}
