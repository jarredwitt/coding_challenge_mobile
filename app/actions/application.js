import { UPDATE_PROPERTY } from 'constants/application';

import { saveDraftApplicationData } from 'data/storage';

export const saveApplicationAsDraft = () => async (dispatch, getState) => {
  try {
    const state = getState();

    const data = {
      application: state.application.toJS(),
      members: state.members.toJS(),
      vehicles: state.vehicles.toJS(),
    };

    const dataJSON = JSON.stringify(data);

    await saveDraftApplicationData(dataJSON);
  } catch (error) {
    console.log(error);
  }
};

export const updateApplicationProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
