// 创建“外壳”组件App
import React from "react"
import './App.css'
import List from "./components/List"
import Search from "./components/Search"

/**
 *  消息订阅与发布
 * 案例：github搜索案例
 * 
 * 1. 消息订阅与发布，适用于任意组件之间的沟通
 */

// 创建App组件
export default class App extends React.Component{ 

    render() {
        return (
            <div className="container">
            <Search />
            <List />
          </div>
        )
    }
}