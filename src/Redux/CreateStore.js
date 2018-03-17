import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { __DEV__ } from '../Config/AppConfig'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Logger Middleware ------------- */

  if (__DEV__) {
    const loggerMiddleware = createLogger()
    middleware.push(loggerMiddleware)
  }

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
