import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';
import List from './List.js';

class App extends Component {
  state = {
    list:''
  }

  handleAddTask = ( tasks ) => {
    this.setState({ list: [ ...this.state.list, tasks ]});
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
         <Todo handleAddTask={this.handleAddTask}/>
         <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
