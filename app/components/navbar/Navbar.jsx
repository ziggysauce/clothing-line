import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/lookbook">Lookbook</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/account">Account</Link>
      </div>
    )
  }
}

export default Navbar;






