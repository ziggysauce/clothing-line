import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <div>
            <span>
              <input type="text" name="fname" />
              <span>fname</span>
            </span>
          </div>
          <div>
            <span>
              <input type="text" name="lname" />
              <span>lname</span>
            </span>
          </div>
          <div>
            <span>
              <input type="text" name="username" />
              <span>username</span>
            </span>
          </div>
          <div>
            <span>
              <input type="text" name="email" />
              <span>email</span>
            </span>
          </div>
          <div>
            <span>
              <input type="password" name="password" />
              <span>password</span>
            </span>
          </div>
          <div>
            <span>
              <input type="image" name="image" />
              <span>image</span>
            </span>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;