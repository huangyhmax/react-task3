import React, { Component } from 'react';
 
export default class TodoItem extends Component {
    render(){
    return (
        <li>
        <input type="checkbox" className="chexb"
            checked={this.props.todos.status === 'completed'}
            onChange={this.toggle.bind(this)}
        />
        {/*<input type="text" className="listcxt" value={item.title} />*/}
        <input type="text" className="listcxt" defaultValue={this.props.todos.title} />
        <span className="delicon" onClick={this.delete.bind(this)}>x</span>
        </li>
    )
   }
    toggle(e){
        this.props.onToggle(e, this.props.todos)
    }
    delete(e){
        this.props.onDelete(e, this.props.todos)
        console.log(123)
    }
}


