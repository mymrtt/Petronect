import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutesConfig from './RoutesConfig';

class App extends Component {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<Router>
				<RoutesConfig />
			</Router>
		);
	}
}

export default App;
