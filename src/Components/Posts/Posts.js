import React from 'react';
import './Posts.css';

const Posts = (props) => {
  return (
    <div className='post-block'>
      <h1>{props.name}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Posts;
