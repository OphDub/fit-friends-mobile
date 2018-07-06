import { createStore } from 'redux';
import rootReducer from './reducers/index';

const configureStore = () => {
  let store = createStore(rootReducer);
  return store;
}

export default configureStore;