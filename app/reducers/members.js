import { fromJS } from 'immutable';

import { ADD_OR_UPDATE_MEMBER } from 'constants/members';

const initialState = fromJS({});
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_MEMBER:
      return state.set(action.member.get('id'), action.member);
    default:
      return state;
  }
};
