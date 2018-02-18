import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/pages/Home.jsx';

import Signup from './components/user/Signup.jsx';
import Login from './components/user/Login.jsx';
import Cart from './components/user/Cart.jsx';
import Account from './components/user/Account.jsx';

import Women from './components/pages/Women.jsx';
import Men from './components/pages/Men.jsx';
import Accessories from './components/pages/Accessories.jsx';
import Lookbook from './components/pages/Lookbook.jsx';

import About from './components/pages/About.jsx';


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
            <Signup 
              history={history} 
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />
          </Route>
          <Route path='/login' component={Login} >
            <Login 
              history={history} 
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />
          </Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/women" component={Women}></Route>
          <Route path="/men" component={Men}></Route>
          <Route path="/accessories" component={Accessories}></Route>
          <Route path="/lookbook" component={Lookbook}></Route>
          <Route path="/about" component={About}></Route>
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
