import React, {Component} from 'react';
import './Login.css';
import PostsBox from '../PostsBox/PostsBox';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }
  submitPost = (posting) => {

  }
  render() {
    return (
      <div className='login'>
        <div className='home-block'>
          <form className='login-form'>
            <h1>Welcome To My Studio Ghibli Fan Page</h1>
            <button>Make A Cat</button>
            <button>Explore Movies</button>
            <button>Escape The Maze</button>
          </form>
          <h3>or Add to Community Posts</h3>
          <form>
            <h2>Say Something About Yourself</h2>
            <input type='text' placeholder='Choose A Name' />
            <input type='text' placeholder='Tell Us Your Favorite Ghbili Character' />
            <input type='text' placeholder='Now Write Anything You Want!' />
            <button type='submit' onClick={this.submitPost}/>
          </form>
        </div>
        <div>
          <PostsBox posts={this.props.posts} />
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  // result: PropTypes.object
}

export default Login
