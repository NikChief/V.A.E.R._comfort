import { INIT_PATTERNS } from "../actionTypes/patternsAT";
import { GET_CATEGORY_TYPE_ID } from "../actionTypes/categoryTypesAT"

const initialState = { patterns: [], categoryTypeId: null }

export function patternReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_PATTERNS:
      return {
        ...state, patterns: [...action.payload]
      };
    case GET_CATEGORY_TYPE_ID:
      return {
        ...state, categoryTypeId: action.payload
      };
    default:
      return state;
  }
}


