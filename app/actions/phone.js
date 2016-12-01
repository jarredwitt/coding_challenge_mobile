import { Alert } from 'react-native';
import { NavigationActions } from '@exponent/ex-navigation';
import { batchActions } from 'redux-batched-actions';

import { PhoneNumber } from 'data/api';
import Router from 'Router';

import { setApplicationData, setApplicationLoading } from './application';
import { setMembers } from './members';
import { setVehicles } from './vehicles';

function showAlert(title, body) {
  Alert.alert(title, body);
}

export const confirmPhoneNumber = () => async (dispatch, getState) => {
  try {
    dispatch(setApplicationLoading(true));

    const state = getState();

    const phoneNumber = state.application.get('data').get('phoneNumber');
    const confirmationCode = state.application.get('data').get('confirmationCode');

    const result = await PhoneNumber.confirm(phoneNumber, confirmationCode);

    const applicationData = result.data.application || {};
    const members = result.data.members || [];
    const vehicles = result.data.vehicles || [];

    dispatch(batchActions([
      setApplicationLoading(false),
      setApplicationData(applicationData),
      setMembers(members),
      setVehicles(vehicles),
      NavigationActions.push('root', Router.getRoute('householdInfoScreen')),
    ]));
  } catch (error) {
    dispatch(setApplicationLoading(true));
    showAlert('Error!', error.message);
  }
};

export const validatePhoneNumber = () => async (dispatch, getState) => {
  try {
    dispatch(setApplicationLoading(true));

    const state = getState();

    const phoneNumber = state.application.get('data').get('phoneNumber');

    await PhoneNumber.validate(phoneNumber);
    dispatch(batchActions([
      setApplicationLoading(false),
      NavigationActions.push('root', Router.getRoute('confirmPhoneScreen')),
    ]));
  } catch (error) {
    dispatch(setApplicationLoading(true));
    showAlert('Error!', error.message);
  }
};
