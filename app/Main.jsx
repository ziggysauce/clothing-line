import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/pages/Home.jsx';

import Login from './components/user/Login.jsx';
import Signup from './components/user/Signup.jsx';
import Account from './components/user/Account.jsx';

import Cart from './components/shoppingCart/Cart.jsx';

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
      <div>
        <Switch>
          <Route exact path='/'>
            <Home 
              history={history}
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />
          </Route>
          <Route 
            path='/signup' 
            component={() => (<Signup 
              history={history} 
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />)}
          />
          <Route 
            path='/login' 
            component={() => (<Login
              history={history} 
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
            />)}
          />
          <Route path="/account" component={() => <Account/>} />
          <Route path="/cart" component={() => <Cart/>} />
          <Route path="/women" component={() => <Women/>} />
          <Route path="/men" component={() => <Men/>} />
          <Route path="/accessories" component={() => <Accessories/>} />
          <Route path="/lookbook" component={() => <Lookbook/>} />
          <Route path="/about" component={() => <About/>} />
        </Switch>
      </div>
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
