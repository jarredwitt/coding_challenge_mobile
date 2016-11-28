import { fromJS } from 'immutable';

import { UPDATE_PROPERTY } from 'constants/application';

const initialState = fromJS({
  data: {},
  loading: false,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROPERTY:
      return state.update('data', data => data.set(action.name, action.value));
    default: {
      return state;
    }
  }
};
