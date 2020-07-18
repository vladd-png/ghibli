import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  addEmoji() {
    let allEmojis = ['✨', '🍬', '🌟', '🦄', '🦋', '🥳', '👽', '🍕', '🧩', '💎', '🔮', '💜'];
    let randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    console.log(randomEmoji)
    return `${randomEmoji} ${this.props.name} ${randomEmoji}`;
  }
  render () {
    return (
      <div className='single-post'>
        <h1>{this.addEmoji()}</h1>
        <h3>{this.props.character}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Posts;
