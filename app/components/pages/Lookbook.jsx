import React, { Component } from 'react';
import '../../styles/main.scss';
import Navbar from '../navbar/Navbar.jsx';


class Lookbook extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>This is the Lookbook page</h1>
      </div>
    );
  }
}

export default Lookbook;