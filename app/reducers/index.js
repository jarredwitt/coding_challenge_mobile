import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import application from './application';
import members from './members';
import vehicles from './vehicles';

export default combineReducers({
  application,
  members,
  navigation: NavigationReducer,
  vehicles,
});
