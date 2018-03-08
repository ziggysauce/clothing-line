import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("this is the signup event: ", event);
    event.preventDefault();
    const fName = this.refs.fName;
    const lName = this.refs.lName;
    const username = this.refs.username;
    const email = this.refs.email;
    const password = this.refs.password;
    const image = this.refs.image;
    const userType = this.refs.userType;
    const creds = { 
      fName: fName.value.trim(), 
      lName: lName.value.trim(), 
      username: username.value.trim(), 
      email: email.value.trim(), 
      password: password.value.trim(), 
      image: image.value.trim(), 
      userType: userType.value.trim() 
    };
    this.props.onSignupClick(creds, this.props.history);
  }

  render() {
    return (
      <div className="form-container">
        <form>
        <h1>SIGN UP</h1>
          <div className="input-row">
            <input
              type="text"
              ref="fName"
              className="input-container"
              placeholder="first name"
            />
            <input
              type="text"
              ref="lName"
              className="input-container"
              placeholder="last name"
            />
          </div>
          <div className="input-col">
            <input
              type="text"
              ref="username"
              className="input-container"
              placeholder="username"
            />
            <input
              type="email"
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
            <input
              type="text"
              ref="image"
              className="input-container"
              placeholder="image"
            />
            <input
              type="integer"
              ref="userType"
              className="input-container"
              placeholder="usertype"
            />
          </div>
          <button className="button submit-button" onClick={event => this.handleClick(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;