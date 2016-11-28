import { ADD_OR_UPDATE_VEHICLE, REMOVE_VEHICLE } from 'constants/vehicles';

export const addOrUpdateVehicle = vehicle => ({
  type: ADD_OR_UPDATE_VEHICLE,
  vehicle,
});

export const removeVehicle = id => ({
  type: REMOVE_VEHICLE,
  id,
});
