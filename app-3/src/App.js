import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    filterString:'',
    list:["filter",'through','this','list','thanks', '222','22', '2222','22222']
  }
  handleChange2 = ( filter ) => {
    this.setState({ filterString : filter })
  }
  render() {
    let looper = this.state.list.filter(( e, i ) => {
      return e.includes( this.state.filterString );
    }).map( ( e,i ) => {
      return <h3 key = { i }> { e  } </h3>
    }) 
    return ( 
      <div className="App">
        <div className="App-header">
        <input onChange={(e)=>this.handleChange2(e.target.value)} type="text"></input>
        </div>
        {looper}
      </div>
    );
  }
}

export default App;
