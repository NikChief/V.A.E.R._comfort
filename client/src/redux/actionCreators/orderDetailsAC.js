import { INIT_ORDER_DETAILS, SAGA_INIT_ORDER_DETAILS } from "../actionTypes/orderDetailsAT"

export function initOrderDetailsAC(payload) {
  return {
    type: INIT_ORDER_DETAILS,
    payload
  }
}

export function fetchInitOrderDetailsAC(payload) {
  return {
    type: SAGA_INIT_ORDER_DETAILS,
    payload
  }
}
