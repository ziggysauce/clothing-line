import React, { Component } from 'react';
import '../../styles/main.scss';
import Navbar from '../navbar/Navbar.jsx';
import Login from '../user/Login.jsx';
import Signup from '../user/Signup.jsx';

class Account extends Component {
  render() {
    const { dispatch, errorMessage, history, isAuthenticated, logoutUser } = this.props;
    return (
      <div>
        <Navbar/>
        <h1>This is the Account page</h1>
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
    );
  }
}

export default Account;