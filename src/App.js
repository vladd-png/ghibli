import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: null
      },
      favorites: []
    }
  }
  render () {
    return (
      <div className="App">
        <h1>Welcome to My Studio Ghibli Fan Page</h1>
      </div>
    )
  }
}

export default App;
