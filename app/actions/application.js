import { ADD_MEMBER, UPDATE_PROPERTY } from 'constants/application';

export const addMemberToApplication = id => ({
  type: ADD_MEMBER,
  id,
});

export const updateApplicationProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
