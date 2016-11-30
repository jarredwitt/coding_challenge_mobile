import { fromJS } from 'immutable';

import { ADD_MEMBER, REMOVE_MEMBER, SET_MEMBERS, UPDATE_MEMBER } from 'constants/members';

const initialState = fromJS([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return state.push(action.member);
    case REMOVE_MEMBER: {
      const index = state.findIndex(member => member.get('id') === action.id);
      return state.update(index, member => member.set('removed', true));
    }
    case SET_MEMBERS:
      return fromJS(action.members);
    case UPDATE_MEMBER:
      return state.set(action.index, action.member);
    default:
      return state;
  }
};
