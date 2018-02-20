import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/main.scss';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-container">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/women">Women</Link></button>
        <button><Link to="/men">Men</Link></button>
        <button><Link to="/accessories">Accessories</Link></button>
        <button><Link to="/lookbook">Lookbook</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/cart">Cart</Link></button>
        <button><Link to="/account">Account</Link></button>
      </div>
    )
  }
}

export default Navbar;






