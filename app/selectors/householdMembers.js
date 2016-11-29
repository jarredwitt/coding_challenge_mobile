import { createSelector } from 'reselect';

export default createSelector(
  state => state.members,
  members => members.filter(member => !member.get('removed'))
);
