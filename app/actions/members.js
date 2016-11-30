import { ADD_MEMBER, REMOVE_MEMBER, SET_MEMBERS, UPDATE_MEMBER } from 'constants/members';

export const addMember = member => ({
  type: ADD_MEMBER,
  member,
});

export const removeMember = index => ({
  type: REMOVE_MEMBER,
  index,
});

export const setMembers = members => ({
  type: SET_MEMBERS,
  members,
});

export const updateMember = (index, member) => ({
  type: UPDATE_MEMBER,
  index,
  member,
});
