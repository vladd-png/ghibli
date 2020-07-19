import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.newName = this.addEmoji();
    this.state = {
    }
  }
  addEmoji() {
    let allEmojis = ['✨', '🍬', '🌟', '🦄', '🦋', '🥳', '👽', '🍕', '🧩', '💎', '🔮', '💜'];
    let randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    this.newName = `${randomEmoji} ${this.props.name} ${randomEmoji}`;
    return this.newName
  }
  render () {
    return (
      <div className='single-post'>
        <div className='users-name'>
          <h1>{this.newName}</h1>
          <h3>is {this.props.character}</h3>
        </div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Posts;
