import React, { Component } from 'react';
import './App.css';

function updateState  (value) { 
    return {
    message : value
  }
} 

class App extends Component {
  state={
    message:" "
  }

  handleMessage = (value) =>{
    this.setState(updateState(value));
  }
  
  render() {
    console.log(this.state.message);
    return (
      <div className="App">
        <div className="App-header">
          <h2>INPUT FIELD = {this.state.message}</h2>
          <input onChange={(e)=>this.handleMessage(e.target.value)} type="text"></input>
        </div>
      </div>
    );
  }
}

export default App;
