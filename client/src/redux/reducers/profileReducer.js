// import { INIT_ORDER_DETAILS } from "../actionTypes/orderDetailsAT";

import { GET_ORDERS_INFO, GET_PERSONAL_INFO } from "../actionTypes/profileAT"

const initialState = { personalInfoView: true }

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONAL_INFO:
      return {
        ...state, personalInfoView: true, 
      }
    
    case GET_ORDERS_INFO:
      return {
        ...state, personalInfoView: false, 
      }

    default:
      return state
  }
}
