import { ADD_VEHICLE, REMOVE_VEHICLE, SET_VEHICLES, UPDATE_VEHICLE } from 'constants/vehicles';

export const addVehicle = vehicle => ({
  type: ADD_VEHICLE,
  vehicle,
});

export const removeVehicle = id => ({
  type: REMOVE_VEHICLE,
  id,
});

export const setVehicles = vehicles => ({
  type: SET_VEHICLES,
  vehicles,
});

export const updateVehicle = (index, vehicle) => ({
  type: UPDATE_VEHICLE,
  index,
  vehicle,
});
