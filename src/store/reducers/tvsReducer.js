import {
  TYPES
} from '../actions/tvList'

const initialState = {
  tvList: [],
  error: null
};

function tvListReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.TVS_SUCCESS:
      return {
        ...state,
        tvList: action.payload,
        error: null
      };
    case TYPES.TVS_FAILED:
      return {
        ...state,
        tvList: [],
        error: action.payload
      };
    default:
      return state;
  }
}

export default tvListReducer;