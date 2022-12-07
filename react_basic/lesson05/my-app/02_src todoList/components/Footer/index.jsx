import React, { Component } from 'react'
import './index.css'


/**
 * 1. defaultchecked只能是第一次执行的时候生效。如果写checked 就需要写一个onChange的回调函数搭配使用。
 * 2. js数组里面的方法需要复习。
 */
export default class Footer extends Component {

  // 全选checkbox的回调。 传入event获取到input复选框的状态。
  handleCheckAll =(event) =>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除所有已经完成了的checkbox的回调
  handleClearAllDone = () => {
    this.props.handleClearAllDone()
  }
  render() {

    const {todos} = this.props.todos

    // js数组里面的reduce的用法？？？
    // 已完成的list
    const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done? 1:0)},0)

    // 全部的todos的长度
    const total = todos.length

    console.log(doneCount,'**',total)

    return (
      <div className="todo-footer">
        <label>
        <input type="checkbox" onChange={this.handleCheckAll }  checked={doneCount===total && total > 0 ? true : false}/>
        </label>
        <span>
        <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}
