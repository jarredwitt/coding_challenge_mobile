import { applyMiddleware, compose, createStore } from 'redux';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { enableBatching } from 'redux-batched-actions';
import reduxThunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import rootReducer from 'reducers';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

export default (initialState = {}) => {
  const store = createStoreWithNavigation(enableBatching(rootReducer), initialState, compose(applyMiddleware(reduxThunk), devTools({
    name: 'Coding Challenge App',
    realtime: true,
    hostname: 'localhost',
    port: 8001,
  })));

  return store;
};
