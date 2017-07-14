/*JSX写todolist*/

import React,{Component} from 'react';
import {render} from 'react-dom';
import TodoInput from './todoinput';
import TodoItem from './todoitem';
import './todolist.css';


class Listtodo extends Component{
    constructor(props){
        super(props)
        this.state={
            newTodo:'',
            todoList:[
                // {id:1,title:'test'},
                // {id:2,title:'test2'},
                // {id:3,title:'test3'},
                // {id:4,title:'test4'},
            ]
        }
            // todoList:localStorage.load('todoList') || []
    }
    render(){
        
        // let todos=this.state.todoList.map((item,index)=>{
            let todos = this.state.todoList
            .filter((item)=> !item.deleted)
            .map((item,index)=>{
                return (
                    // <li>
                    // <input type="checkbox" className="chexb"/>
                    // <input type="text" className="listcxt" value={item.title} />
                    // <span className="delicon">x</span>
                    // </li>
                
                    <TodoItem 
                        key={index} 
                        todos={item} 
                        onToggle={this.toggle.bind(this)}
                        onDelete={this.delete.bind(this)}
                    />
                )        
        })
        // console.log(todos)
        return(
            <div>
                
                <h1>My To do list</h1>
                <TodoInput content={this.state.newTodo} 
                    onChange={this.changeTitle.bind(this)}
                    onSubmit={this.addTodo.bind(this)} />
                <ul className="items">
                    {todos}
                </ul>
            </div>
        )
    }
    toggle(e, todo){
        todo.status = todo.status === 'completed' ? '' : 'completed'
        this.setState(this.state) 
        // localStorage.save('todoList',this.state.todoList)
    }

    changeTitle(event){
        this.setState({
            newTodo: event.target.value,
            todoList: this.state.todoList
        })
        // localStorage.save('todoList',this.state.todoList)
    }
    addTodo(event){
        this.state.todoList.push({
            title: event.target.value,
            status: null,
            deleted: false
        })
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })
    }


    delete(event, todos){
        todos.deleted = true
        this.setState(this.state) 
    }
}
// render(<Listtodo />,TodoContainer);
export default Listtodo;
