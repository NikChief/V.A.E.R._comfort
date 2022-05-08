import { ADD_ITEM_TO_BASKET, CLEAR_BASKET, DELETE_ITEM_FROM_BASKET, GET_ITEMS_INFO, INIT_BASKET_TOTAL } from '../actionTypes/basketAT'

const initialState = {
  basketItems: JSON.parse(localStorage.getItem('basket'))?.basketItems ?? [],
  itemsInfoFromDb: JSON.parse(localStorage.getItem('basket'))?.itemsInfoFromDb ?? [],
  basketTotal: ''
};

export function basketReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_ITEM_TO_BASKET:
      return {
        ...state, basketItems: [...state.basketItems, action.payload]
      }

    case GET_ITEMS_INFO:
      return {
        ...state, itemsInfoFromDb: [...state.itemsInfoFromDb, action.payload]
      }

    case INIT_BASKET_TOTAL:
      return {
        ...state, basketTotal: Number(action.payload)
      }

    case DELETE_ITEM_FROM_BASKET:
      return {
        ...state, 
        basketItems: [...state.basketItems].filter(item => item.id !== action.payload), 
        itemsInfoFromDb: [...state.itemsInfoFromDb].filter(item => item.basket_id !== action.payload), 
      }

    case CLEAR_BASKET:
      return {
        ...state, basketItems: [], itemsInfoFromDb: []
      }

    default:
      return state
  }
}
