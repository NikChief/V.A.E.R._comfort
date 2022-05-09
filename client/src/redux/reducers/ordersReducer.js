import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS, IN_PROCESSING_ORDERS, CONFIRMED_ORDERS, PAID_ORDERS, ON_DELIVERY_ORDERS, INIT_CURRENT_ORDER, CLEAR_CURRENT_ORDER, INIT_CURRENT_ORDER_MESSAGE } from '../actionTypes/ordersAT'

const initialState = { orders: [], currentOrder: '', currentOrderMessage: '' }

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
      // console.log('=====', action.payload )
      return {
        ...state, currentOrder: action.payload
      }
    
    case INIT_CURRENT_ORDER_MESSAGE:
      return {
        ...state, currentOrderMessage: action.payload
      }

    case CLEAR_CURRENT_ORDER:
      // очищаем текущий заказ (стираем массив заказов)
      const clearCurrentOrder = {
        ...state, currentOrder: ''
      }
      console.log('clearCurrentOrder', clearCurrentOrder)
      return {
        ...state, currentOrder: ''
      }

    default:
      return state
  }
}
