import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  results: []
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_RESULTS:
      return {
        ...state,
        results: [...payload],
      };

    default:
      return state;
  }
};
