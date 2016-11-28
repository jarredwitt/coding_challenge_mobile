import { fromJS } from 'immutable';

import { ADD_OR_UPDATE_VEHICLE, REMOVE_VEHICLE } from 'constants/vehicles';

const initialState = fromJS({});
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_VEHICLE:
      return state.set(action.vehicle.get('id'), action.vehicle);
    case REMOVE_VEHICLE:
      return state.update(action.id, vehicle => vehicle.set('removed', true));
    default:
      return state;
  }
};
