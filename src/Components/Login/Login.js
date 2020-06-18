import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

export const Login = (props) => {
  return (
    <div className="login">
      <h1>Welcome To My Studio Ghibli Fan Page</h1>
    </div>
  )
}

Login.propTypes = {
  result: PropTypes.object
}

export default Login
