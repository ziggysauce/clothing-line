import React, { Component } from 'react';
import axios from 'axios';

class Tops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tops: []
    };
  }

  showTops() {
    console.log('show tops func called');
    axios.get('/api/products')
      .then((results) => {
        console.log(results.data);
        this.setState({ tops: results.data })
      });
  }

  componentDidMount() {
    this.showTops();
  }
  
  render() {
    console.log('after render: ', this.state);
    return (
      <div>
        <h1>This is the Tops component</h1>
        <div className="card-container">

        {this.state.tops.map((top, index) => {
          return (
            <div key={index} className="tops-card">
              <h2>{top.product_name}</h2>
              <h3>{top.product_price}</h3>
              <p>Size: {top.product_size}</p>
              <p>Color: {top.product_color}</p>
              <p><strong><em>Product description:</em></strong></p>
              <p>{top.product_description}</p>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Tops;