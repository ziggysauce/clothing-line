import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { signupUser, loginUser, logoutUser } from '../../actions/login';

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
        <button onClick={logoutUser}>Logout</button>
      </div>
    )
  }
}

// export default Home;
export default connect(null, { logoutUser })(Home);