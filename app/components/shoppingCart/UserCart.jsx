import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItems from './CartItems.jsx';
import OrderSummary from './OrderSummary.jsx';


class UserCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCart: [],
      subtotal: null,
      tax: null,
      total: null
    }

    this.handleClickRemoveAll = this.handleClickRemoveAll.bind(this);
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this);
    this.handleFillCart = this.handleFillCart.bind(this);
  }

  handleClickRemoveItem(e, index) {
    // this.state.userCart.splice(index, 1);
    console.log('REMOVE FUNCTION NOT YET PROPERLY HANDLED');
  }

  handleClickRemoveAll() {
    console.log('REMOVE ALL FUNCTION NOT YET PROPERLY HANDLED');
    this.setState({
      userCart: [],
      subtotal: null,
      tax: null,
      total: null
    });
  }

  handleCalculateOrderSummary() {
    let subtotal = 0;
    this.state.userCart.forEach((item) => { subtotal += item.order_item_price });
    const tax = Math.ceil(subtotal * .0575 * 100) / 100;
    const total = subtotal + 8 + tax;

    this.setState({ 
      subtotal: subtotal,
      tax: tax,
      total: total
    });
  }

  handleFillCart() {
    // Grab ORDER_ITEM data
    // Unsure how to display PRODUCT data
    axios.get('/api/order_items')
    .then((results) => {
      console.log(results);
      this.setState({ userCart: results.data })
      this.handleCalculateOrderSummary();
    });
  }

  render() {
    // console.log(this.state);    
    return (
      <div>
        <div className="cart-components">
          <div className="my-cart">
            <div className="my-cart--top">
              <h1>My Cart ({this.state.userCart.length > 0 ? this.state.userCart.length : '0'})</h1>
              <Link to="/">Continue Shopping</Link>
            </div>
            <button className="button" onClick={this.handleFillCart}>Dummy Data: Fill Cart</button>
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