import * as types from "../actions/ActionTypes";
const initialState = {
  universities: [],
};

const UniReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
      };
    case types.ADD_UNIVERSITY:
      return {
        ...state,
        universities: state.universities.filter(
          (_, index) => (index = state.universities.length + 1)
        ),
      };
    case types.REMOVE_UNIVERSITY:
      return {
        ...state,
        universities: state.universities.filter(
          (_, index) => index !== state.universities.length - 1
        ),
      };
    default:
      return state;
  }
};

export default UniReducer;
