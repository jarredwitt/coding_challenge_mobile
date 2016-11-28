import { UPDATE_PROPERTY } from 'constants/application';

export const updateApplicationProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
