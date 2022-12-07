// components目录下就写自己创建的组件就行
// 自定义的组件在App.js中引入再应用。
// 自定义的组件文件名称一般以 **.jsx结尾。

import React,{Component} from "react";

// 样式的模块化，防止与其他样式文件的冲突。
// 要点：1. 必须是***.module.css; 2. 可以引入变量，定义标签的样式
import hello from './Hello.module.css'

export default class Hello extends Component{

    render() {
        return <h2 className={hello.title}>Hello World</h2>
    }
}