import React, { Component } from 'react';
import '../../styles/main.scss';
import Navbar from '../navbar/Navbar.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>This is the About page</h1>
      </div>
    );
  }
}

export default About;