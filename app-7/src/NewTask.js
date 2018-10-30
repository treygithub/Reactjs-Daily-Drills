import React from 'react';


class NewTask extends Component () {
state={
    input:''
}

handleInput = (value) => {
    this.setState({
        input: value
    });
    }

  render(){
  return (
    <div>
       <div className="App">
          <input
          type="text"
          placeholder="Enter new todo"
          name="input"
          onChange={(e)=>this.handleInput(e.target.value)}
          />
        </div>
    </div>
  )
}
}
export default NewTask;