import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Crypto from './Crypto';

class App extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div>
				<h1>Test from App.js</h1>
				<Crypto />
			</div>
		);
  }
}

export default App;