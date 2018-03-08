import React, { Component } from 'react';

class OrderSummary extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div>
          <span>Subtotal:</span>
          <span className="order-summary--val">${this.props.items.subtotal}.00</span>
        </div>
        <div>
          <span>Estimated Tax:</span>
          <span className="order-summary--val">${this.props.items.tax}</span>
        </div>
        <div>
          <span>Shipping:</span>
          <span className="order-summary--val">$8.00</span>
        </div>
        <div>
          <span><strong>Order Total:</strong></span>
          <span className="order-summary--val">${this.props.items.total}</span>
        </div>
        <button className="button submit-button">Checkout</button>
      </div>
    );
  }
}

export default OrderSummary;

