import { applyMiddleware, createStore } from 'redux';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { enableBatching } from 'redux-batched-actions';
import reduxThunk from 'redux-thunk';

import rootReducer from 'reducers';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

export default (initialState = {}) => {
  const store = createStoreWithNavigation(enableBatching(rootReducer), initialState, applyMiddleware(reduxThunk));

  return store;
};
