import { INIT_CURRENT_ITEM } from "../actionTypes/itemAT"

const initialState = { currentItem: '' }


export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CURRENT_ITEM:
      return {
        ...state, currentItem: action.payload
      }

    default:
      return state
  }
}
