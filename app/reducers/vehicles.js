import { fromJS } from 'immutable';

import { ADD_VEHICLE, REMOVE_VEHICLE, SET_VEHICLES, UPDATE_VEHICLE } from 'constants/vehicles';

const initialState = fromJS([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return state.push(action.vehicle);
    case REMOVE_VEHICLE: {
      const index = state.findIndex(vehicle => vehicle.get('id') === action.id);
      return state.update(index, vehicle => vehicle.set('removed', true));
    }
    case SET_VEHICLES:
      return fromJS(action.vehicles);
    case UPDATE_VEHICLE:
      return state.set(action.index, action.vehicle);
    default:
      return state;
  }
};
