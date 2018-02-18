import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';


// The Main component renders one of the routes provided
// Routes (provided that one matches). 

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dispatch, errorMessage, isAuthenticated, history } = this.props;
    return (
        <Switch>
          <Route exact path='/'>
            <Home 
              history={history}
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />
          </Route>
          <Route path='/signup' component={Signup} >
            <Signup history={history} />
          </Route>
          <Route path='/login' component={Login} >
            <Login history={history} />
          </Route>
        </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;
  return {
    isAuthenticated,
    errorMessage,
  };
};


export default withRouter(connect(mapStateToProps)(Main));
