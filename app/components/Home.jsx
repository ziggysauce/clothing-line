import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/login';
import Login from "./Login.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
render () {
  const { dispatch, errorMessage, history, isAuthenticated } = this.props;
  return(
    <div>
      <h1>This is the homepage</h1>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Login               
        history={history}
        isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        onLoginClick={creds => dispatch(loginUser(creds, history))}/>
    </div>
  
  )
}
}
export default Home;
