import { NavigationActions } from '@exponent/ex-navigation';
import { batchActions } from 'redux-batched-actions';
import { RESET, UPDATE_PROPERTY } from 'constants/member';

import { addMemberToApplication } from 'actions/application';
import { addOrUpdateMember } from './members';

export const resetMember = () => ({
  type: RESET,
});

export const saveMember = () => (dispatch, getState) => {
  const member = getState().member;
  const currentMemberIds = getState().application.get('data').get('member_ids');

  const actions = [];
  if (!currentMemberIds.has(member.get('id'))) {
    actions.push(addMemberToApplication(member.get('id')));
  }
  actions.push(addOrUpdateMember(member), NavigationActions.pop('root'));

  dispatch(batchActions(actions));
};

export const updateMemberProperty = (name, value) => ({
  type: UPDATE_PROPERTY,
  name,
  value,
});
