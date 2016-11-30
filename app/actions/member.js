import { NavigationActions } from '@exponent/ex-navigation';
import { batchActions } from 'redux-batched-actions';
import { RESET, SET_MEMBER, UPDATE_PROPERTY } from 'constants/member';

import { addMember, updateMember } from './members';

export const resetMember = () => ({
  type: RESET,
});

export const saveMember = index => (dispatch, getState) => {
  const member = getState().member;

  const baseAction = index !== undefined ? updateMember(index, member) : addMember(member);

  dispatch(batchActions([
    baseAction,
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
