import { INIT_COLORS } from "../actionTypes/colorsAT"

const initialState = { colors: [] }


export function colorsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_COLORS:
      return {
        ...state, colors: action.payload
      };

    default:
      return state;
  }
}
