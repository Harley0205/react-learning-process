import React, { Component } from 'react';
import axios from 'axios';
import pubsub from 'pubsub-js'

class Search extends Component {


    search =() => {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:val}} = this

        // 发送请求前通知. 使用消息订阅的方式
        pubsub.publish('subMess',{isFirst:false, isLoading:true})

        // 发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${val}`).then(
            response => {
                console.log('成功了：',response.data.items)
                // 请求成功后，使用消息订阅的方式 发送消息
                pubsub.publish('subMess',{isLoading:false, users: response.data.items})

            },
            error =>{
                console.log('失败了：',error)
                // 请求失败后，使用消息订阅的方式 发送消息
                pubsub.publish('subMess',{isLoading:false, err:error.message})

            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input type="text" ref={c=>this.keyWordElement = c} placeholder="输入关键字点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;