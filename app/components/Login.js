import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <span>
              <input type="text" name="username" />
              <span>username</span>
            </span>
          </div>
          <div>
            <span>
              <input type="password" name="password" />
              <span>password</span>
            </span>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;