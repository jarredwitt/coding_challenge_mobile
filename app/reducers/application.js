import { fromJS } from 'immutable';

import { ADD_MEMBER, UPDATE_PROPERTY } from 'constants/application';

const initialState = fromJS({
  data: {
    member_ids: [],
    vehicle_ids: [],
  },
  loading: false,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return state.update('data', data => data.update('member_ids', members => members.push(action.id)));
    case UPDATE_PROPERTY:
      return state.update('data', data => data.set(action.name, action.value));
    default: {
      return state;
    }
  }
};
