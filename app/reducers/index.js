import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import application from './application';

export default combineReducers({
  application,
  navigation: NavigationReducer,
});
