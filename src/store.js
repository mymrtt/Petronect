
// Libs
import {
	compose,
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import Oportunities from './dataflow/modules/Oportunities-Modules';

const reducers = combineReducers({
	oportunities: Oportunities,
});

export default function configureStore(initialState) {
	// const epicMiddleware = createEpicMiddleware(rootEpic);

	const bundle = compose(applyMiddleware(thunkMiddleware));
	const createStoreWithMiddleware = bundle(createStore);
	const store = createStoreWithMiddleware(
		reducers,
		initialState,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	return store;
}
