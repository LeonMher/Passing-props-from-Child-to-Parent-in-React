import React from 'react';
import './App.css';
import Child from './Child';


class App extends React.Component {
  constructor() {
    super()
    this.state = { name: "" }
  }


  myFunc = (param) => {
    this.setState({ name: param })
  }
  render() {




    return (
      <div className='App'>
        <h1>Hello World</h1>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Bakhshik" })}>click to change</button>
        <Child data={
          { name: this.state.name, changeName: this.myFunc.bind(this) }
        } />
      </div>
    )
  }
}

export default App;







