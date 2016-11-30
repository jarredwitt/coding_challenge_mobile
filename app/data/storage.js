import { AsyncStorage } from 'react-native';
import { fromJS, Map } from 'immutable';

const STORAGE_KEY = '@@CODING_CHALLENGE_APP';

function transformKeysToNumbers(data) {
  let map = new Map();
  Object.keys(data).forEach((k) => {
    map = map.set(k * 1, fromJS(data[k]));
  });

  return map;
}

export const saveDraftApplicationData = async data => await AsyncStorage.setItem(STORAGE_KEY, data);
export const getDraftApplicationData = async () => {
  const draftApplicationDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
  if (!draftApplicationDataJSON) {
    return null;
  }

  const draftApplicationData = JSON.parse(draftApplicationDataJSON);
  return {
    application: fromJS(draftApplicationData.application),
    members: fromJS(draftApplicationData.members),
    vehicles: transformKeysToNumbers(draftApplicationData.vehicles),
  };
};
