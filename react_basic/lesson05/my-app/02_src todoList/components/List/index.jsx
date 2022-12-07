import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    // 接收App父组件传过来的todos列表
    // 下面语句如果写成这样会报错，页面不显示：const {todos} = this.props？？？？？请核对
    // 批量传递： ...todo 
    const {todos} = this.props.todos
    const {updateTodo,deleteTodo} = this.props

    return (
      <ul className="todo-main">
          {
            todos.map((todo)=>{
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
      </ul>
    )
  }
}
