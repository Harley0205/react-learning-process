import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    console.log('List....',this.props)
    const {users, isFirst, isLoading, err} = this.props
    console.log('users:',users,'isFirst:',isFirst,'isLoading:',isLoading,'err:',err)

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
