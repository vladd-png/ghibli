import React, {Component} from 'react';
import './Login.css';
import PostsBox from '../PostsBox/PostsBox';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      id: '',
      name: '',
      character: '',
      content: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitPost = () => {
    this.props.addPost({ id: Math.random(), name: this.state.name, character: this.state.character, content: this.state.content })
    this.setState({ id: '', name: '', character: '', content: '' })
  }
  render() {
    return (
      <div className='login'>
      <h1>Welcome To My Studio Ghibli Fan Page</h1>
      <form className='login-form'>
        <button>Make A Cat</button>
        <button>Explore Movies</button>
        <button>Escape The Maze</button>
      </form>
        <div className='home-block'>
          <form className='post-box'>
            <h2>Say Something About Yourself</h2>
            <div className='top-input'>
              <input className='name-input' name='name' type='text' placeholder='Choose A Name' value={this.state.name} onChange={this.handleChange}/>
              <input className='char-input' name='character' type='text' placeholder='Tell Us Your Favorite Ghbili Character' value={this.state.character} onChange={this.handleChange}/>
            </div>
            <input className='cont-input' name='content' type='text' placeholder='Now Write Anything You Want!' value={this.state.content} onChange={this.handleChange}/>
            <button type='button' onClick={ this.submitPost }> Submit! </button>
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
