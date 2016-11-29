import { createSelector } from 'reselect';

export default createSelector(state => state.application.get('data'), (applicationData) => {
  const keys = ['address', 'city', 'number_of_bedrooms', 'state', 'zip'];
  return applicationData.filter((v, k) => keys.includes(k));
});
