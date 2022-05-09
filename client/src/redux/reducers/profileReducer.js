// import { INIT_ORDER_DETAILS } from "../actionTypes/orderDetailsAT";

import { GET_ORDERS_INFO, GET_PERSONAL_INFO } from "../actionTypes/profileAT"

const initialState = { personalInfoView: true }

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONAL_INFO:
      // console.log('init order details=>', action.payload);
      return {
        ...state, personalInfoView: true, 
      }
    
    case GET_ORDERS_INFO:
      // console.log('init order details=>', action.payload);
      return {
        ...state, personalInfoView: false, 
      }

    default:
      return state
  }
}
