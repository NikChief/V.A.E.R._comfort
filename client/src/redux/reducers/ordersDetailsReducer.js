import { INIT_ORDER_DETAILS } from "../actionTypes/orderDetailsAT";

const initialState = { orderDetails: [] }

export function ordersDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDER_DETAILS:
      return {
        ...state, orderDetails: action.payload, 
      }
    
    default:
      return state
  }
}
