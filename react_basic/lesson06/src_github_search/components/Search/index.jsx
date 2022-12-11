import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    search =() => {

        /** 解构赋值的写法
         * 
         * 1.连续解构赋值： const {keyWordElement:{value}} = this    console.log(value)
         * 2.连续解构赋值并且重命名：const {keyWordElement:{value:val}} = this    console.log(val)
         * 3.普通写法： const {keyWordElement} = this  console.log(keyWordElement.value)
         */ 
        
        const {keyWordElement:{value:val}} = this
        // 发送请求前，通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})

        
        // console.log('val==',val)

        // 此处使用了代理，也可以不使用 
        // axios.get(`http://localhost:3000/api1/search/users?q=${val}`).then(

        // axios.get(`https://api.github.com/search/users?q=${val}`).then(

         axios.get(`http://localhost:3000/api1/search/users?q=${val}`).then(
            response => {
                console.log('成功了：',response.data.items)

                // 请求成功后，通知App更新状态
                this.props.updateAppState({isLoading:false, users: response.data.items})
            },
            error =>{
                console.log('失败了：',error)
                // 此处不能直接返回错误对象，要返回错误对象上的一个属性
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input type="text" ref={c=>this.keyWordElement = c} placeholder="输入关键字点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;