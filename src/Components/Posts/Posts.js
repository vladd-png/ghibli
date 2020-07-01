import React from 'react';

const Posts = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default Posts;
