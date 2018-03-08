import React, { Component } from 'react';

class CartItems extends Component {
  render() {
    return (
      <div className="cart-item-wrapper">
        <div className="cart-container">
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="cart-item-card-wrapper">
                <img src={item.product_img}/>
                <div className="cart-item-card--desc">
                  <h3>{item.product_name}</h3>
                  <p>{item.product_description}</p>
                  <p>Size: {item.product_size}</p>
                  <p>Color: {item.product_color}</p>
                  <p>Quantity:</p>
                  <p><strong>${item.product_price}.00</strong></p>
                </div>
                <button className="button" onClick={(e) => this.props.handleClickRemoveItem(e, index)}>Remove Item</button>
              </div>
            );
          })}
        </div>
        <button className="button" onClick={(e) => this.props.handleClickRemoveAll(e)}>Remove All Items</button>
      </div>
    );
  }
}

export default CartItems;