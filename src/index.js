import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import confugureStore from './Store.js'

const store = confugureStore({})  

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
	), document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
  }


