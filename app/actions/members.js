import { ADD_OR_UPDATE_MEMBER, REMOVE_MEMBER } from 'constants/members';

export const addOrUpdateMember = member => ({
  type: ADD_OR_UPDATE_MEMBER,
  member,
});

export const removeMember = id => ({
  type: REMOVE_MEMBER,
  id,
});
