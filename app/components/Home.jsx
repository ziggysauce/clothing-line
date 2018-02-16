import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser, loginUser, logoutUser } from '../actions/login';
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const { dispatch, errorMessage, history, isAuthenticated, logoutUser } = this.props;
    return (
      <div>
        <h1>This is the homepage!!!!</h1>
        <button><Link to="/signup">Signup</Link></button>
        <button><Link to="/login">Login</Link></button>
        <button onClick={logoutUser}>Logout</button>
        <Signup
          history={history}
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          onSignupClick={creds => dispatch(signupUser(creds, history))}/>
        <Login               
          history={history}
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          onLoginClick={creds => dispatch(loginUser(creds, history))}/>
      </div>
    )
  }
}

// export default Home;
export default connect(null, { logoutUser })(Home);
