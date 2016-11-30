import { fromJS } from 'immutable';

import { ADD_VEHICLE, REMOVE_VEHICLE, UPDATE_VEHICLE } from 'constants/vehicles';

const initialState = fromJS([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return state.push(action.vehicle);
    case REMOVE_VEHICLE:
      return state.update(action.index, vehicle => vehicle.set('removed', true));
    case UPDATE_VEHICLE:
      return state.set(action.index, action.vehicle);
    default:
      return state;
  }
};
