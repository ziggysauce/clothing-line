import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';


class App extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		);
  }
}

export default App;