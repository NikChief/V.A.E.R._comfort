import { INIT_CURRENT_ITEM, INIT_CURRENT_ITEM_COUNT, INIT_CURRENT_ITEM_PRICE } from "../actionTypes/itemAT"

const initialState = { currentItem: '', currentItemPrice: '', currentItemCount: '' }


export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CURRENT_ITEM:
      // данные из таблицы pattern записываем в стейт
      return {
        ...state, currentItem: action.payload
      }
    
    case INIT_CURRENT_ITEM_PRICE:
      // данные о цене текущего item записываются в стейт
      return {
        ...state, currentItemPrice: action.payload.price
      }
    
    case INIT_CURRENT_ITEM_COUNT:
      // данные о кол-ве текущего item записываются в стейт
      return {
        ...state, currentItemCount: action.payload
      } 

    default:
      return state
  }
}
