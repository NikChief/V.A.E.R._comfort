
import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAID_ORDERS, ALL_ORDERS, SAGA_INIT_ORDERS, INIT_ORDER_MESSAGE, IN_PROCESSING_ORDERS, CONFIRMED_ORDERS, ON_DELIVERY_ORDERS, INIT_ORDER, SAGA_INIT_ORDER } from '../actionTypes/ordersAT'

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

export function allOrdersAC() {
  return {
    type: ALL_ORDERS,
  }
}
export function inProcessingOrdersAC() {
  return {
    type: IN_PROCESSING_ORDERS,
  }
}

export function confirmedOrdersAC() {
  return {
    type: CONFIRMED_ORDERS,
  }
}

export function rejectedOrdersAC() {
  return {
    type: REJECTED_ORDERS,
  }
}

export function paidOrdersAC() {
  return {
    type: PAID_ORDERS,
  }
}

export function onDeliveryOrdersAC() {
  return {
    type: ON_DELIVERY_ORDERS,
  }
}

export function completedOrdersAC() {
  return {
    type: COMPLETED_ORDERS,
  }
}


export function initOrderAC(payload) {
  return {
    type: INIT_ORDER,
    payload,
  }
}

export function fetchInitOrderAC(payload) {
  return {
    type: SAGA_INIT_ORDER,
    payload,
  }
}
