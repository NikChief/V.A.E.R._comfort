import { INIT_CURRENT_ITEM, UPDATE_CURRENT_ITEM_AMOUNT } from "../actionTypes/itemAT"

const initialState = { currentItem: '', currentAmount: '' }


export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CURRENT_ITEM:
      return {
        ...state, currentItem: action.payload
      }

    case UPDATE_CURRENT_ITEM_AMOUNT:
      return {
        ...state, currentAmount: action.payload
      }

    default:
      return state
  }
}
