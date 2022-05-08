import { INIT_CURRENT_ITEM, INIT_CURRENT_ITEM_AMOUNT, INIT_CURRENT_ITEM_COUNT, INIT_CURRENT_ITEM_PRICE, CLEAR_CURRENT_ITEM } from "../actionTypes/itemAT"

const initialState = { currentItem: '', currentItemPrice: '', currentItemCount: '', currentItemAmount: '' }


export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CURRENT_ITEM:
      // данные из таблицы pattern записываем в стейт
      return {
        ...state, currentItem: action.payload
      }
    
    case INIT_CURRENT_ITEM_PRICE:
      // данные о цене текущего item записываются в стейт
      console.log('price', action.payload.price)
      return {
        ...state, currentItemPrice: action.payload.price
      }
    
    case INIT_CURRENT_ITEM_COUNT:
      // данные о кол-ве текущего item записываются в стейт
      console.log('count', action.payload)
      return {
        ...state, currentItemCount: action.payload
      } 

    case INIT_CURRENT_ITEM_AMOUNT:
      // данные о кол-ве текущего item записываются в стейт
      console.log('amount', action.payload)
      return {
        ...state, currentItemAmount: Number(action.payload.currentItemCount) * Number(action.payload.currentItemPrice)
      } 
    
    case CLEAR_INIT_CURRENT_ITEM:
      // данные о кол-ве текущего item записываются в стейт
      console.log('amount', action.payload)
      return {
        ...state, currentItem: '', currentItemPrice: '', currentItemCount: '', currentItemAmount: ''
      } 

    case CLEAR_CURRENT_ITEM:
      // при размонтировании компонента всё почистится и на новом итеме будет красивенько
      return initialState;
    

    default:
      return state
  }
}
