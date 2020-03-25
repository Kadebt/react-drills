import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newarr:[''],
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
    handlerText(val){
      this.setState({newarr: val})
    }
    render(){
      let arrfilter = this.state.arr.filter((e, i) => {
        return e.includes(this.state.newarr)
      })
      .map((e,i) => {
        return <h2 key={i}>{e}</h2>
      })
  return (
    <div className="App">
      <input onChange={e => this.handlerText(e.target.value)} type='text'/>
      {arrfilter}
    </div>
  );
}
}
  

export default App;
