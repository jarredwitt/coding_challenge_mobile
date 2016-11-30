import { fromJS } from 'immutable';

import { ADD_MEMBER, REMOVE_MEMBER, UPDATE_MEMBER } from 'constants/members';

const initialState = fromJS([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return state.push(action.member);
    case REMOVE_MEMBER:
      return state.update(action.index, member => member.set('removed', true));
    case UPDATE_MEMBER:
      return state.set(action.index, action.member);
    default:
      return state;
  }
};
