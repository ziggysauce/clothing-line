import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems.jsx';
import OrderSummary from './OrderSummary.jsx';

class UserCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCart: [
        {
          product_id: 1,
          product_name: "Best Shirt ever",
          product_price: 25,
          product_color: "red",
          product_size: "M",
          product_description: "This gotta be the best shirt ever!",
          product_img: "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        }, 
        {
          product_id: 2,
          product_name: "Best Pants ever",
          product_price: 30,
          product_color: "blue",
          product_size: "L",
          product_description: "This gotta be the best pants ever!",
          product_img: "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        }, 
        {
          product_id: 3,
          product_name: "Best Hat ever",
          product_price: 10,
          product_color: "black",
          product_size: "S",
          product_description: "This gotta be the best hat ever!",
          product_img: "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"  
        }
      ],
      subtotal: null,
      tax: null,
      total: null
    }

    this.handleClickRemoveAll = this.handleClickRemoveAll.bind(this);
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this);
  }

  handleClickRemoveItem(e, index) {
    this.state.userCart.splice(index, 1);
    this.handleCalculateOrderSummary();
  }

  handleClickRemoveAll() {
    this.setState({
      userCart: [],
      subtotal: null,
      tax: null,
      total: null
    });
  }

  handleCalculateOrderSummary() {
    let subtotal = 0;
    this.state.userCart.forEach((item) => { subtotal += item.product_price });
    const tax = Math.ceil(subtotal * .0575 * 100) / 100;
    const total = subtotal + 8 + tax;

    this.setState({ 
      subtotal: subtotal,
      tax: tax,
      total: total
    });
  }

  componentWillMount() {
    this.handleCalculateOrderSummary();
  }

  render() {
    return (
      <div>
        <div className="cart-components">
          <div className="my-cart">
            <div className="my-cart--top">
              <h1>My Cart ({this.state.userCart.length > 0 ? this.state.userCart.length : '0'})</h1>
              <Link to="/">Continue Shopping</Link>
            </div>
            {this.state.userCart.length > 0 && 
              <CartItems 
                items={this.state.userCart} 
                handleClickRemoveItem={this.handleClickRemoveItem}
                handleClickRemoveAll={this.handleClickRemoveAll}
              />}
          </div>
          {this.state.userCart.length > 0 && <OrderSummary items={this.state}/>}
        </div>
      </div>
    );
  }
}

export default UserCart;