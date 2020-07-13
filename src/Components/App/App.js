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
      posts: [
        {id: 2, name: 'BigFan', character: 'The Blue Dragon - Haku River Spirit', content: 'I am the biggest Totoro fan around. I even have a Chibi tattoo on my arm. Love it all.'}
      ]
    }
  }
  addPost = (posting) => {
    this.setState({ posts: [...this.state.posts, posting]  })
  }
  render () {
    return (
      <div className="App">
        <Login posts={this.state.posts} addPost={this.addPost} />
      </div>
    )
  }
}

export default App;
