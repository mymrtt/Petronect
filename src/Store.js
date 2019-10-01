
// Libs
import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import list from './dataflow/modules/Search-Modules';

const reducers = combineReducers({
  list: list,
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