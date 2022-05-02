
import { ALL_ORDERS, FULLFILED_ORDERS, COMPLETED_ORDERS, REJECTED_ORDERS, PAYED_ORDERS } from '../actionTypes/ordersAT'

export function allOrdersAC(payload) {
  return {
    type: ALL_ORDERS,
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
