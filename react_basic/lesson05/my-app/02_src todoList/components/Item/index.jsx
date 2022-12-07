import React, { Component } from 'react'
import './index.css';

/**
 * 1. defaultChecked：设置复选框默认的是否选中。
 * 2. onMouseEnter-鼠标移入触发; onMouseLeave-鼠标移开触发。 
 * 3. 通过 mouse 状态，实现了鼠标移上去后颜色发生变化以及是否显示删除按钮。
 */

export default class Item extends Component {
  
  state = {mouse:false} 

  // 鼠标移入，移出的回调
  handleMouse =(flag) =>{
    return () =>{
      this.setState({mouse:flag})
    }
  }

  // 勾选、取消勾选某个todo的回调
  handleCheck =(id) =>{
    return (event)=>{
      // console.log(id, event.target.checked)  // event.target.checked  获取到复选框是否被选中：false/true 
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 按钮删除的回调。不用高阶函数的方式。
  handleDelete =(id) =>{

    // 删除时，弹出警告。只有点击确定的时候才执行。
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? "#ddd" : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
            <input type="checkbox" checked={done}  onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}}  className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
      </li>
    )
  }
}
