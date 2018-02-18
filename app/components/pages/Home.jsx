import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser, loginUser, logoutUser } from '../../actions/login';
import Navbar from '../navbar/Navbar.jsx';
import Login from '../user/Login.jsx';
import Signup from '../user/Signup.jsx';
import Footer from '../footer/footer.jsx';

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
        <Navbar/>
        <button><Link to="/signup">Signup</Link></button>
        <button><Link to="/login">Login</Link></button>
        <button onClick={logoutUser}>Logout</button>
        <Footer/>
      </div>
    )
  }
}

// export default Home;
export default connect(null, { logoutUser })(Home);
