import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

export const Login = (props) => {
  return (
    <div className='login'>
      <form className='login-form'>
        <h1>Welcome To My Studio Ghibli Fan Page</h1>
        <input type='text' placeholder='Account Name' />
      </form>
    </div>
  )
}

Login.propTypes = {
  // result: PropTypes.object
}

export default Login
