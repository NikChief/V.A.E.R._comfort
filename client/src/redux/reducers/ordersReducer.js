import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS, INIT_ORDER_MESSAGE } from '../actionTypes/ordersAT'

const initialState = { orders: [], orderMessage: '' }

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDERS:
      // console.log('8=>',state.orders);
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

    case INIT_ORDER_MESSAGE:
      return {
        ...state, orderMessage: action.payload
      }

    default:
      return state
  }
}
