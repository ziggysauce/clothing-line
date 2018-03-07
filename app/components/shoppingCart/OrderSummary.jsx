import React, { Component } from 'react';

class OrderSummary extends Component {
  render() {
    console.log('from ordersummary: ', this.props.items);
    return (
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: </p>
        <p>Estimated Tax: </p>
        <p>Shipping: </p>
        <p><strong>Order Total: </strong></p>
        <button>Checkout</button>
      </div>
    );
  }
}

export default OrderSummary;