
import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAID_ORDERS, ALL_ORDERS, SAGA_INIT_ORDERS, IN_PROCESSING_ORDERS, CONFIRMED_ORDERS, ON_DELIVERY_ORDERS, INIT_CURRENT_ORDER, SAGA_INIT_CURRENT_ORDER, CLEAR_CURRENT_ORDER, SAGA_ADD_ORDER_ITEM, INIT_CURRENT_ORDER_MESSAGE, SAGA_SET_ORDER_STATUS, SET_ORDER_STATUS, FILTER_ORDERS } from '../actionTypes/ordersAT'

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

export function filterOrdersAC(payload) {
  return {
    type: FILTER_ORDERS,
    payload,
  }
}

export function initCurrentOrderAC(payload) {
  return {
    type: INIT_CURRENT_ORDER,
    payload,
  }
}

export function initCurrentOrderMessageAC(payload) {
  return {
    type: INIT_CURRENT_ORDER_MESSAGE,
    payload,
  }
}

export function fetchInitCurrentOrderAC(payload) {
  return {
    type: SAGA_INIT_CURRENT_ORDER,
    payload,
  }
}

export function clearCurrentOrderAC() {
  return {
    type: CLEAR_CURRENT_ORDER,
  }
}

export function fetchAddOrderItemAC(payload) {
  return {
    type: SAGA_ADD_ORDER_ITEM,
    payload,
  }
}

export function fetchSetStatusOrderAC(payload) {
  return {
    type: SAGA_SET_ORDER_STATUS,
    payload,
  }
}

export function setStatusOrderAC(payload) {
  return {
    type: SET_ORDER_STATUS,
    payload,
  }
}

