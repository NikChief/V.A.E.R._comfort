import { INIT_MATERIALS } from "../actionTypes/materialsAT";

const initialState = { materials: [] }


export function materialsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_MATERIALS:
      return {
        ...state, materials: action.payload
      };

    default:
      return state;
  }
}
