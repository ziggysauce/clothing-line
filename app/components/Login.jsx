import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    console.log("this is the event", event);
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds, this.props.history);
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>

            <input
              type="text"
              ref="email"
              className="form-control"
              placeholder="email"
            />
              <span>username</span>

          </div>
          <div>

            <input
              type="password"
              ref="password"
              className="form-control"
              placeholder="Password"
            />
            <span>password!!!!!!!!!!!!</span>

          </div>
          <button onClick={event => this.handleClick(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
