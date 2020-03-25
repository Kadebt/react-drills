import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      message: ""
    }
  }
  
    handleMessage(val) {
      this.setState({message: val})
    }
    render(){
  return (
    <div className="App">
      <input type="Text" onChange={event => this.handleMessage(event.target.value)}/>
      <p>{this.state.message}</p>
    </div>
  );
}
}


export default App;
