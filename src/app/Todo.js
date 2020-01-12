import React, { Component } from 'react';

export class Todo extends Component {
  constructor(){
    super();
    this.state = {
      todos : [],
      newtodo : ''
    } 
  }
  handleChange(e){
    const {value} = e.target;
    this.setState({newtodo : value})
  }
  handleClick(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newtodo];
    this.setState({todos,newtodo:''})
  }
  removeTodo(i){
    const todos = [...this.state.todos.slice(0,i),this.state.todos.slice(i+1)]
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newtodo} placeholder="new todos"></input>
          <button onClick={this.handleClick.bind(this)}>create</button> 
        </form>
        <ul>
          {this.state.todos.map((todo,i) => (
              <li onClick={ () => this.removeTodo(i)}>{todo}</li>
            )
          )}
        </ul>
      </div>

    );
  }
}
