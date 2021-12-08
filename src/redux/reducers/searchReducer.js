import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  results: [],
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_RESULTS:
      return {
        ...state,
        loading: false,
        results: [...payload],
      };

    case ActionTypes.SET_RESULTS_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    default:
      return state;
  }
};
