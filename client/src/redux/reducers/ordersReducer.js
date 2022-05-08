import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS, IN_PROCESSING_ORDERS, CONFIRMED_ORDERS, PAID_ORDERS, ON_DELIVERY_ORDERS, INIT_CURRENT_ORDER, CLEAR_CURRENT_ORDER } from '../actionTypes/ordersAT'

const initialState = { orders: [], currentOrder: '' }

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ORDERS:
      return {
        ...state, orders: action.payload, constOrders: action.payload
      }
    case ALL_ORDERS:
      return {
        ...state, orders: [...state.constOrders]
      }
    case IN_PROCESSING_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'В обработке')]
      }
    case CONFIRMED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'Подтвержден')]
      }

    case REJECTED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'Отменен')]
      }

    case PAID_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'Оплачен')]
      }

    case ON_DELIVERY_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'Передан в доставку')]
      }

    case COMPLETED_ORDERS:
      return {
        ...state, orders: [...state.constOrders.filter(order => order.status === 'completed')]
      }

    case INIT_CURRENT_ORDER:
      return {
        ...state, currentOrder: action.payload
      }

    case CLEAR_CURRENT_ORDER:
      return {
        ...state, currentOrder: ''
      }

    default:
      return state
  }
}
