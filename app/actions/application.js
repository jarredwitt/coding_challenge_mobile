import { Alert } from 'react-native';
import { batchActions } from 'redux-batched-actions';

import { SET_DATA, SET_LOADING, UPDATE_PROPERTY } from 'constants/application';

import { Application } from 'data/api';
import { saveDraftApplicationData } from 'data/storage';

import { setMembers } from './members';
import { setVehicles } from './vehicles';

function showAlert(title, body) {
  Alert.alert(title, body);
}

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
    showAlert('Draft Saved!', 'Your application has been saved as a draft on your device.');
  } catch (error) {
    console.log(error);
  }
};

export const setApplicationData = data => ({
  type: SET_DATA,
  data,
});

export const setApplicationLoading = isLoading => ({
  type: SET_LOADING,
  isLoading,
});

export const submitApplication = () => async (dispatch, getState) => {
  try {
    dispatch(setApplicationLoading(true));

    const state = getState();

    const application = state.application.get('data').toJS();
    const members = state.members.toJS().filter(member => !(member.removed && member.local));
    const vehicles = state.vehicles.toJS().filter(vehicle => !(vehicle.removed && vehicle.local));

    let result;
    if (application.id) {
      result = await Application.update(application.id, application, members, vehicles);
    } else {
      result = await Application.create(application, members, vehicles);
    }

    const data = result.data;

    dispatch(batchActions([
      setApplicationData(data.application),
      setMembers(data.members),
      setVehicles(data.vehicles),
    ]));

    dispatch(setApplicationLoading(false));
    showAlert('Success!', 'Your application has been submitted.');
  } catch (error) {
    console.log(error);
  }
};

export const updateApplicationProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
