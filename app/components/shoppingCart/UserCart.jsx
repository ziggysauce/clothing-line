import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems.jsx';
import OrderSummary from './OrderSummary.jsx';

class UserCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
      userCart: [
        {
          product_id: 1,
          product_name: "Best Shirt ever",
          product_price:"$5",
          product_color: "red",
          product_size: "M",
          product_description: "This gotta be the best shirt ever!"  
        }, 
        {
          product_id: 2,
          product_name: "Best Pants ever",
          product_price:"$5",
          product_color: "blue",
          product_size: "L",
          product_description: "This gotta be the best pants ever!"  
        }, 
        {
          product_id: 3,
          product_name: "Best Hat ever",
          product_price:"$5",
          product_color: "black",
          product_size: "S",
          product_description: "This gotta be the best hat ever!"  
        }
      ]
    }
  }

  render() {
    console.log('from usercart: ', this.state);

    return (
      <div>
        <h2>My Cart ({this.state.cart ? this.state.userCart.length : '0'})</h2>
        <Link to="/">Continue Shopping</Link>
        {this.state.cart && <CartItems items={this.state.userCart}/>}
        <OrderSummary items={this.state.userCart}/>
      </div>
    );
  }
}

export default UserCart;