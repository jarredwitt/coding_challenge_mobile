import { fromJS } from 'immutable';

import { RESET, UPDATE_PROPERTY } from 'constants/member';

const initialState = fromJS({
  id: Date.now(),
});
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState.set('id', Date.now());
    case UPDATE_PROPERTY:
      return state.set(action.name, action.value);
    default:
      return state;
  }
};
