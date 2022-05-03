import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS } from '../actionTypes/ordersAT'

const initialState = { orders: [] }

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDERS:
      return {
        ...state, orders: action.payload, constOrders: action.payload
      }
    case FULLFILED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'fullfiled')]
      }

    case COMPLETED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'completed')]
      }

    case REJECTED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'rejected')]
      }

    case PAYED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'payed')]
      }

    case ALL_ORDERS:
      return {
        ...state, orders: [...state.constOrders]
      }

    default:
      return state
  }
}
