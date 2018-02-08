import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';


// The Main component renders one of the routes provided
// Routes (provided that one matches). 

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </Switch>
  </main>
);

export default Main;