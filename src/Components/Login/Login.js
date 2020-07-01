import React from 'react';
import './Login.css';
import Posts from '../Posts/Posts';
import PropTypes from 'prop-types';

export const Login = (props) => {
  return (
    <div className='login'>
      <div className='home-block'>
        <form className='login-form'>
          <h1>Welcome To My Studio Ghibli Fan Page</h1>
          <button>Make A Cat</button>
          <button>Explore Movies</button>
          <button>Escape The Maze</button>
        </form>
      </div>
      <div className='home-block'>
        <Posts />
      </div>
    </div>
  )
}

Login.propTypes = {
  // result: PropTypes.object
}

export default Login
