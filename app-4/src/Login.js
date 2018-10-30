import React, { Component } from 'react';

class Login extends Component {
  state={
    password:"",
    username:""
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
}
 
  handleLogin = (e) => {
      e.preventDefault();
    alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
  }
 
  render() {
      console.log(this.state);
    return (
            <div>
            <form onSubmit={ this.handleLogin }>
            <input type="text"
            name="username"
            placeholder="User Name"
            onChange={ e => this.handleInput(e) }
            >
            </input>

            <input type="password"
            name="password"
            placeholder="Password"
            onChange={ e => this.handleInput(e) }
            >
            </input>

            <button type="submit">Login</button>
            </form>
            </div> 
    );
  }
}

export default Login;