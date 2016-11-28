import { NavigationActions } from '@exponent/ex-navigation';
import { batchActions } from 'redux-batched-actions';
import { RESET, SET_MEMBER, UPDATE_PROPERTY } from 'constants/member';

import { addOrUpdateMember } from './members';

export const resetMember = () => ({
  type: RESET,
});

export const saveMember = () => (dispatch, getState) => {
  const member = getState().member;

  dispatch(batchActions([
    addOrUpdateMember(member),
    NavigationActions.pop('root'),
  ]));
};

export const setMember = member => ({
  type: SET_MEMBER,
  member,
});

export const updateMemberProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
