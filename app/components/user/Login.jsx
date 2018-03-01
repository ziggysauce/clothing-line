import React, { Component } from 'react';
import '../../styles/main.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("this is the login event: ", event);
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds, this.props.history);
  }

  render() {
    return (
      <div className="form-container">
        <form>
        <h1>LOGIN</h1>
          <div className="input-row">
            <input
              type="text"
              ref="email"
              className="input-container"
              placeholder="email"
            />
            <input
              type="password"
              ref="password"
              className="input-container"
              placeholder="password"
            />
          </div>
          <button className="submit-button" onClick={event => this.handleClick(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
