import { ADD_OR_UPDATE_MEMBER } from 'constants/members';

export const addOrUpdateMember = member => ({
  type: ADD_OR_UPDATE_MEMBER,
  member,
});
