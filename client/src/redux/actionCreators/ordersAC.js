
import { INIT_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS, ALL_ORDERS } from '../actionTypes/ordersAT'

export function initOrdersAC(payload) {
  return {
    type: INIT_ORDERS,
    payload
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
