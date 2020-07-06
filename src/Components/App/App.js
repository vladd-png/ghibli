import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Posts from '../Posts/Posts';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: 1,
        name: null
      },
      posts: [
        {id: 2, name: 'BigFan', content: 'I am the biggest Totoro fan around. I even have a Chibi tattoo on my arm. Love it all.'}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        < Login />
        < Posts eachPost={this.state.posts} />
      </div>
    )
  }
}

export default App;
