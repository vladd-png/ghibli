import React from 'react';
import './Posts.css';

const Posts = (props) => {
  return (
    <div className='single-post'>
      <h1>{props.name}</h1>
      <h3>{props.character}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default Posts;
