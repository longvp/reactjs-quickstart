import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  return store;
};

export default configureStore;
