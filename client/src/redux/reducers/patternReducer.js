import { INIT_PATTERNS } from "../actionTypes/patternsAT";
import { GET_CATEGORY_TYPE_ID } from "../actionTypes/categoryTypesAT"
import { CLEAR_PATTERNS } from "../actionTypes/patternsAT"

const lsCategoryTypeId = localStorage.getItem('category_type_id')


const initialState = { patterns: [], categoryTypeId: lsCategoryTypeId }

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
      case CLEAR_PATTERNS:
        return {
          ...state, patterns: []
        };
    default:
      return state;
  }
}


