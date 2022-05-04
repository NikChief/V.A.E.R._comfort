import { ADD_ITEM_TO_BASKET, GET_ITEMS_INFO_FROM_DB, INIT_BASKET_TOTAL } from '../actionTypes/basketAT'

// const initialState = { basket: [] }
const initialState = {
  // basket: JSON.parse(localStorage.getItem('basket')) ?? [],
  // itemsInfoFromDb: JSON.parse(localStorage.getItem('itemsInfoFromDb')) ?? [],
  basket: JSON.parse(localStorage.getItem('basket')).basket ?? [],
  itemsInfoFromDb: JSON.parse(localStorage.getItem('basket')).itemsInfoFromDb ?? [],
  basketTotal: ''
};


export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return {
        ...state, basket: [...state.basket, action.payload]
      }
    case GET_ITEMS_INFO_FROM_DB:
      return {
        ...state, itemsInfoFromDb: action.payload
      }
    case INIT_BASKET_TOTAL:
      // console.log(action.payload, 'action.payload')
      return {
        ...state, basketTotal: Number(action.payload)
      }
    default:
      return state
  }
}
