import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserCart from './UserCart.jsx';

class Cart extends Component {
  render() {
    return (
      <div className="cart-page">
        <UserCart />
      </div>
    );
  }
}

export default Cart;