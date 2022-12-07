// 创建“外壳”组件App
import React from "react"
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建App组件
export default class App extends React.Component{

    /** TodosList要做的事情需要放在App里面
     * 1. Header向App里面写数据（子组件操作父组件）
     * 2. List向页面展示数据 （子组件读取父组件）
     * 
     * 3. 状态在哪里，操作状态的方法就在哪里。(状态todos在App里面，操作状态todos的方法就在App里面)
     */

    state = {todos:[
        {id:'001', name:'吃饭', done:true},
        {id:'002', name:'睡觉', done:true},
        {id:'003', name:'打豆豆', done:false}
    ]}
    
    // 用于接收子组件(Header)传递过来的值。
    // 子组件传递过来的值应该是一个todo对象才行,并且放在了列表的最前方
    addTodoList = (todoObj) => {
        console.log('App data a :',todoObj)
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({todos: newTodos})
    }

    // 删除一个todo对象
    deleteTodo =(id) =>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id 
        })
        this.setState({todos:newTodos})
    }

    //updateTodo 用于更新一个todo对象，需要传给子组件(List)，子组件(List)再传给子组件(Item)进行处理。
    updateTodo = (id,done) => {
        console.log('id:',id,'done:',done)
        // 获取状态中的todos
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done:done}  // 意思是复制todoObj的值，并将done的值改成传过来的值
            else return todoObj
        })
        //更新状态
        this.setState({todos:newTodos})
    }

    // checkAllTodo用于全选
    checkAllTodo =(done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj, done}
        })
        this.setState({todos:newTodos})
    }

    // 清除所有已经完成的
    handleClearAllDone =()  =>{
        // 获取原来的todos
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
        return !todoObj.done
    })

        this.setState({todos:newTodos})
    }

    render() {
        const todos = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodoList={this.addTodoList} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} handleClearAllDone={this.handleClearAllDone} />
                </div>
            </div>
        );
    }
}