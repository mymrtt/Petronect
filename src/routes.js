// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

// Components
import Login from './component/Login/Login';
import Dashboard from './component/RelevanceMatch/Index';

const RoutesConfig = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/login' component={Login} />
			<PrivateRoute component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export default RoutesConfig;
