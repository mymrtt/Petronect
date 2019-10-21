// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

// Components
import Login from './component/Login/Login';
import Dashboard from './component/DashBoard/DashBoard';
import Filters from './component/Filters/Index';

const RoutesConfig = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<PrivateRoute path='/dashboard' component={Dashboard} />
			<PrivateRoute component={Filters} />
		</Switch>
	</BrowserRouter>
);

export default RoutesConfig;
