import { fromJS } from 'immutable';

import { SET_DATA, SET_LOADING, UPDATE_PROPERTY } from 'constants/application';

const initialState = fromJS({
  data: {},
  loading: false,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return state.set('data', fromJS(action.data));
    case SET_LOADING:
      return state.set('loading', action.isLoading);
    case UPDATE_PROPERTY:
      return state.update('data', data => data.set(action.name, action.value));
    default: {
      return state;
    }
  }
};
