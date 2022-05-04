import { INIT_CURRENT_ITEM, SAGA_INIT_CURRENT_ITEM } from "../actionTypes/itemAT";

export function initCurrentItemAC(payload) {
  return {
    type: INIT_CURRENT_ITEM,
    payload
  }
}

export function fetchInitCurrentItemAC(payload) {
  return {
    type: SAGA_INIT_CURRENT_ITEM,
    payload
  }
}
