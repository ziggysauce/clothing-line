import React, { Component } from 'react';
import '../../styles/main.scss';
import Login from '../user/Login.jsx';
import Signup from '../user/Signup.jsx';

class Account extends Component {
  render() {
    const { dispatch, errorMessage, history, isAuthenticated, logoutUser } = this.props;
    return (
      <div>
        <h1>This is the Account page</h1>
        <div className="account-container">
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
      </div>
    );
  }
}

export default Account;