import { INIT_ORDER_DETAILS } from "../actionTypes/orderDetailsAT";

const initialState = { orderDetails: [] }

export function ordersDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDER_DETAILS:
      console.log('init order details=>', action.payload);
      return {
        ...state, orderDetails: action.payload, 
      }
    
    default:
      return state
  }
}
