import { ADD_ITEM_TO_BASKET } from '../actionTypes/basketAT'

const initialState = { basket: [] }


export function basketReducer(state = initialState, action) {
  switch (action.type) {
    // case ADD_ITEM_TO_BASKET:

    //   return {
    //     ...state, baskets: action.payload
    //   }

    default:
      return state
  }
}
