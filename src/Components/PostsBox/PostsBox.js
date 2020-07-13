import React from 'react';
import './PostsBox.css';
import Posts from '../Posts/Posts';

const PostsBox = (props) => {
  let allPosts = props.posts.map(post => <Posts id={post.id} key={post.id} name={post.name} character={post.character} content={post.content} />)
  return (
    <div className='post-block'>
      {allPosts}
    </div>
  )
}

export default PostsBox;
