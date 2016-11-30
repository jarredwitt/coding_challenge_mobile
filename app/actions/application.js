import { UPDATE_PROPERTY } from 'constants/application';

import { Application } from 'data/api';
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

export const submitApplication = () => async (dispatch, getState) => {
  try {
    const state = getState();

    const application = state.application.get('data').toJS();
    const members = state.members.valueSeq().toJS();
    const vehicles = state.vehicles.valueSeq().toJS();

    let result;
    if (application.id) {
      result = await Application.update(application.id, application, members, vehicles);
    } else {
      result = await Application.create(application, members, vehicles);
    }

    // Need to transform the result
    // make members and vehicles hashes again.
    // Try to think of a utility function
    // Think about if hashes are actually needed or arrays would be better...

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateApplicationProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
