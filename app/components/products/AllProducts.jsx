import React, { Component } from 'react';
import axios from 'axios';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('/api/products')
    .then((results) => {
      // console.log(results.data);
      this.setState({ products: results.data })
    });
  }

  // UNFINISHED FUNCTION CALL 
  handleClickAddToCart(e, index) {
    e.preventDefault;
  }
  
  render() {
    // console.log('ALL PRODUCTS: ', this.state);
    return (
      <div>
        <h1>This is the AllProducts component</h1>
        <div className="card-container">

        {this.state.products.map((product, index) => {
          return (
            <div key={index} className="products-card">
              <h2>{product.product_name}</h2>
              <img src={product.product_img}/>
              <h3>${product.product_price}</h3>
              <div className="products-card__details">
                <p>Size: {product.product_size}</p>
                <p>Color: {product.product_color}</p>
                <p><strong><em>Product description:</em></strong></p>
                <p>{product.product_description}</p>
              </div>
              <button className="button" onClick={(e) => {this.handleClickAddToCart(e, index)}}>Add to Cart</button>
            </div>
          );
        })}

        </div>
      </div>
    );
  }
}

export default AllProducts;