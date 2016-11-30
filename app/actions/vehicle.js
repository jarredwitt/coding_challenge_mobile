import { NavigationActions } from '@exponent/ex-navigation';
import { batchActions } from 'redux-batched-actions';
import { RESET, SET_VEHICLE, UPDATE_PROPERTY } from 'constants/vehicle';

import { addVehicle, updateVehicle } from './vehicles';

export const resetVehicle = () => ({
  type: RESET,
});

export const saveVehicle = index => (dispatch, getState) => {
  const vehicle = getState().vehicle;

  const baseAction = index !== undefined ? updateVehicle(index, vehicle) : addVehicle(vehicle);

  dispatch(batchActions([
    baseAction,
    NavigationActions.pop('root'),
  ]));
};

export const setVehicle = vehicle => ({
  type: SET_VEHICLE,
  vehicle,
});

export const updateVehicleProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
