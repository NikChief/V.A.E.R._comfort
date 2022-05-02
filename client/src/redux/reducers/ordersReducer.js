import { ALL_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS } from '../actionTypes/ordersAT'

const initialState = { orders: [] }


export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_ORDERS:
      return {
        ...state, orders: action.payload
      }

    default:
      return state
  }
}
