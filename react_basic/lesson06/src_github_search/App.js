// 创建“外壳”组件App
import React from "react"
import './App.css'
import List from "./components/List"
import Search from "./components/Search"

/**
 *  案例说明：
 * 1. 输入搜索框内容搜索github上用户相关信息
 * 2. 兄弟组件之间如何进行传值
 *    1.  父组件给子组件传值： props
 *    2.  子组件操作父组件值： 父组件传递给子组件一个函数，子组件在合适的时候去调用函数，并返回传会特定的参数就能将数据带给父组件。
 */

// 创建App组件
export default class App extends React.Component{ 

    state = {
        users:[],          // users初始值为数组
        isFirst: true,     // 是否为第一次打开页面
        isLoading: false,  // 标识，是否处于加载中
        err: '' ,           // 存储请求相关的错误信息
    }

    // 更新App的state
    updateAppState = (stateObj) =>{
        this.setState(stateObj)   // 注意：这里不能加大括号 this.setState({stateObj})
    }

    render() {
        const {users} = this.state
        console.log('--->',users)
        return (
            <div className="container">
            <Search updateAppState={this.updateAppState} />
            <List {...this.state}/>
          </div>
        )
    }
}