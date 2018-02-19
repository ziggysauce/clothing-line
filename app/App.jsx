import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';


class App extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div>
			<Navbar />
			<Main />
			<Footer />
			</div>
		);
  }
}

export default App;