import React, { Component } from 'react';
import '../../styles/main.scss';
import Navbar from '../navbar/Navbar.jsx';


class Men extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>This is the Mens page</h1>
      </div>
    );
  }
}

export default Men;