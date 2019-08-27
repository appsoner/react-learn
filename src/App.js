import React, { Component , Fragment} from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            title: '待办事项列表',
            desc: '当天事情当天搞定'
        }
    }
    // state = {
    //     title:'待办事项列表'
    // }
    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc}>{this.state.title}</TodoHeader>
                <TodoInput btnText='ADD'/>
                <TodoList/>
               app 
            </Fragment>
        )
    }
}
