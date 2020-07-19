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
        {id: 2, name: 'Big Fan', character: 'The Blue Dragon - Haku River Spirit', content: 'I am the biggest Totoro fan around. I even have a Chibi tattoo on my arm. Love it all.'},
        {id: 3, name: 'Little Fairy', character: 'The Fat Mouse', content: 'I love when Yubaba turns the crying fat baby into a fat mouse.'},
        {id: 4, name: 'Totoro Belly', character: 'Chibi', content: 'I want to take a nap on Totoro\'s big belly.'},
        {id: 5, name: 'Meow Meow', character: 'Kiki\s Cat', content: 'I love the little black kitty from Kiki\'s delivery service.'}
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
