import React, { Component } from 'react';
import './App.css';
import Image from './Child.js';
import Myimage from './Myimage.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image Myimage={ "./Myimage.jpg" } />
      </div>
    );
  }
}

export default App;