import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

const configureStore = () => {
  return createStore(reducer, composeWithDevTools());
}

export default configureStore;
