import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const configureStore = () => {
  let store = createStore(rootReducer, middleware);

  sagaMiddleware.run(userSaga);

  return store;
}

export default configureStore;