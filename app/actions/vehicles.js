import { ADD_VEHICLE, REMOVE_VEHICLE, UPDATE_VEHICLE } from 'constants/vehicles';

export const addVehicle = vehicle => ({
  type: ADD_VEHICLE,
  vehicle,
});

export const removeVehicle = index => ({
  type: REMOVE_VEHICLE,
  index,
});

export const updateVehicle = (index, vehicle) => ({
  type: UPDATE_VEHICLE,
  index,
  vehicle,
});
