import React, { Component } from 'react';

// Components
import DashBoard from './component/DashBoard/DashBoard';
import Login from './component/Login/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: 'login',
		};
	}

	render() {
		switch (this.state.screen) {
		case 'login':
			// return (<Login/>);
		case 'dashboard':
		default:
			return (<DashBoard/>);
		}
	}
}

export default App;
