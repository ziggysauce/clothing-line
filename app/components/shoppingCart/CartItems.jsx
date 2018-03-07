import React, { Component } from 'react';

class CartItems extends Component {
  render() {
    console.log('from cartitems: ', this.props.items);
    return (
      <div>
        <h1>This is the CartItem component</h1>
        <div className="card-container">
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="tops-card">
                <img src="#"/>
                <h3>{item.product_name}</h3>
                <p>{item.product_description}</p>
                <p>Size: {item.product_size}</p>
                <p>Color: {item.product_color}</p>
                <p>Quantity:</p>
                <p><strong>{item.product_price} USD</strong></p>
                <button>Remove Item</button>
              </div>
            );
          })}
        </div>
        <button>Remove All Items</button>
      </div>
    );
  }
}

export default CartItems;