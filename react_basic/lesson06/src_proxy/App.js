// 创建“外壳”组件App
import React from "react"
import axios from 'axios'

/** 配置代理的两种方式
 * 1. package.json中加一句配置信息，然后重启："proxy":"http://localhost:5000"  (后面配置的请求的地址)
 * 2. 配置setupProxy.js 
 *    优点：可以配置多个代理，可以灵活的控制请求是否走代理
 *    缺点：配置繁琐，前端请求资源时必须加前缀
 */

// 创建App组件
export default class App extends React.Component{

    getStudentData =() =>{
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功了',response.data)},
            error =>{console.log('失败了',error);}
        )
    }

    getCarData =() =>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('成功了',response.data)},
            error =>{console.log('失败了',error);}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button> &nbsp;
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}