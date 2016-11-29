import { createSelector } from 'reselect';

import householdMembersSelector from './householdMembers';

export default createSelector(
  state => state.vehicles,
  householdMembersSelector,
  (vehicles, householdMembers) => vehicles.filter(vehicle => !vehicle.get('removed')).map((vehicle) => {
    if (!vehicle.has('ownerId')) {
      return vehicle;
    }

    const ownerId = vehicle.get('ownerId');
    console.log(typeof ownerId);
    const ownerName = householdMembers.get(ownerId.toString()).get('first');
    return vehicle.set('owner', ownerName);
  })
);