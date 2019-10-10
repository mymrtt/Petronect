// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import Login from './component/Login/Login';
import Dashboard from './component/DashBoard/DashBoard';
import FiltersAndNotifications from './component/filtersAndNotifications/IndexFilters';
import PrivateRoute from './PrivateRoute';

const RoutesConfig = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<PrivateRoute path='/dashboard' component={Dashboard} />
			<PrivateRoute component={FiltersAndNotifications} />
		</Switch>
	</BrowserRouter>
);

export default RoutesConfig;
