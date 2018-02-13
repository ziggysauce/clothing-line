import React, { Component } from 'react';
import '../styles/main.scss';

class Signup extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="input-row">
            <input
              type="text"
              className="input-container"
              placeholder="first name"
            />
            <input
              type="text"
              className="input-container"
              placeholder="last name"
            />
          </div>
          <div className="input-col">
            <input
              type="text"
              className="input-container"
              placeholder="username"
            />
            <input
              type="email"
              className="input-container"
              placeholder="email"
            />
            <input
              type="password"
              className="input-container"
              placeholder="password"
            />
            <input
              type="text"
              className="input-container"
              placeholder="image"
            />
          </div>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;