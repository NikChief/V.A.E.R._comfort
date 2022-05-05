import { INIT_CATEGORY_TYPES } from "../actionTypes/categoryTypesAT";

const initialState = { categoryTypes: [] }

export function categoryTypesReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CATEGORY_TYPES:
      return {
        ...state, categoryTypes: [...action.payload]
      };

    default:
      return state;
  }
}
