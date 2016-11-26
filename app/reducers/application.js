import { fromJS } from 'immutable';

const initialState = fromJS({
  data: {},
  loading: false,
});
export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
