import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: 1,
        name: null
      },
      favorites: []
    }
  }
  render () {
    return (
      <div className="App">
        < Login />
      </div>
    )
  }
}

export default App;
