import { INIT_TYPES } from "../actionTypes/typesAT";

const initialState = { types: [] }

export function typesReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_TYPES:
      return {
        ...state, types: [...action.payload]
      };

    default:
      return state;
  }
}
