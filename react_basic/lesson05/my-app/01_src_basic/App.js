// 创建“外壳”组件App
import React from "react"
// 引入js和jsx都需要写后缀。
import Hello from "./components/Hello/Hello"

//注意：一般业务供的组件是以js文件名后缀，如果是组件则以jsx文件名后缀。


// 注意：  如果每个自定义的组件当中的jsx文件名称都是index.jsx,样式文件都是index.css
// 那么再App组件里面引入的时候，就会自动引入index.jsx文件，写法如下：(Hello下面的jsx组件名为index.jsx)
// import Hello from "./components/Hello"


// 创建App组件
class App extends React.Component{

    render() {
        return (
            <div>
                <Hello /> 
            </div>
        );
    }
}
// 暴露App组件
// 问题：ES6语法，多种暴露的新式，以及他们之间的区别是什么？？？
export default App

// 创建并暴露组件的方式
// export default class App extends React.Component{