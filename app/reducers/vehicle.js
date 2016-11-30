import { fromJS } from 'immutable';

import { RESET, SET_VEHICLE, UPDATE_PROPERTY } from 'constants/vehicle';

const initialState = fromJS({
  id: Date.now(),
  local: true,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState.set('id', Date.now());
    case SET_VEHICLE:
      return action.vehicle;
    case UPDATE_PROPERTY:
      return state.set(action.name, action.value);
    default:
      return state;
  }
};
