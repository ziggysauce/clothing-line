import React, { Component } from 'react';
import AllProducts from '../products/AllProducts.jsx';

class Lookbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTops: false,
      buttonText: 'Show Items'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    !this.state.showTops ? this.setState({ showTops: true, buttonText: 'Hide Items' }) : this.setState({ showTops: false, buttonText: 'Show Items' });
  }
  
  render() {
    return (
      <div>
        <h1>This is the lookbook page</h1>
        <button onClick={event => this.handleClick(event)}>{this.state.buttonText}</button>

        {this.state.showTops && <AllProducts />}

      </div>
    );
  }
}

export default Lookbook;

