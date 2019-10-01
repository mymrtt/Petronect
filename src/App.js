import React, { Component } from 'react';
// import styled from 'styled-components';

// Components
import DashBoard from './Component/Login/LoginFull';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<>
				<DashBoard />
			</>
		);
	}
}

export default App;
