import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import application from './application';
import member from './member';
import members from './members';
import vehicles from './vehicles';

export default combineReducers({
  application,
  member,
  members,
  navigation: NavigationReducer,
  vehicles,
});
