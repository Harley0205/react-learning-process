import React, { Component } from 'react'
import './index.css';

/**
 * 1. 键盘绑定事件： onKeyUp,表示键盘真正的按完了。(指的是按键从按下到松开，松开的时候才会触发onKeyUp)
 */
export default class Header extends Component {

  // 绑定事件的元素与要操作的元素是同一个，可以借助event
  // event.keyCode 获取键盘按键对应的值，13表示的是回车。
  // 键盘事件的回调
  handleKeyUp =(event) =>{

    // 解构赋值获取keyCode，targe
    const {keyCode, target} = event

    //判断是否按了回车键
    if(keyCode != 13) return 

    // 添加的todo不能为空
    if(target.value.trim() ===''){
      alert('输入不能为空')
      return 
    }

    console.log(target.value, keyCode)

    // 创建一个todo对象
    const todoObj = {id:11, name:target.value, done:false}

    // 子组件把值传递给父组件的方法：
    // 将todoObj传递给父组件
    this.props.addTodoList(todoObj)

    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
