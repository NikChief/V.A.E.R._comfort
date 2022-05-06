
import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS, SAGA_INIT_ORDERS, INIT_ORDER_MESSAGE } from '../actionTypes/ordersAT'

export function initOrdersAC(payload) {
  return {
    type: INIT_ORDERS,
    payload
  }
}

export function fetchInitOrdersAC() {
  return {
    type: SAGA_INIT_ORDERS,
  }
}

export function fullfiledOrdersAC() {
  return {
    type: FULLFILED_ORDERS,
  }
}

export function completedOrdersAC() {
  return {
    type: COMPLETED_ORDERS,
  }
}

export function rejectedOrdersAC() {
  return {
    type: REJECTED_ORDERS,
  }
}

export function payedOrdersAC() {
  return {
    type: PAYED_ORDERS,
  }
}

export function allOrdersAC() {
  return {
    type: ALL_ORDERS,
  }
}

export function initOrderMessageAC(payload) {
  return {
    type: INIT_ORDER_MESSAGE,
    payload,
  }
}
