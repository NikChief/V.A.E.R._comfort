import { ADD_ITEM_TO_BASKET } from '../actionTypes/basketAT'

// const initialState = { basket: [] }
const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) ?? [],
};


export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      const add = {
        ...state, basket: [...state.basket, action.payload]
      }
      console.log('add', add)
      return {
        ...state, basket: [...state.basket, action.payload]
      }


    default:
      return state
  }
}
