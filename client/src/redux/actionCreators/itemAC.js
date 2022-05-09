import { INIT_CURRENT_ITEM, INIT_CURRENT_ITEM_AMOUNT, INIT_CURRENT_ITEM_COUNT, INIT_CURRENT_ITEM_PRICE, SAGA_INIT_CURRENT_ITEM, SAGA_INIT_CURRENT_ITEM_PRICE, CLEAR_CURRENT_ITEM } from "../actionTypes/itemAT";

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

export function initCurrentItemPriceAC(payload) {
  return {
    type: INIT_CURRENT_ITEM_PRICE,
    payload
  }
}

export function fetchInitCurrentItemPriceAC(payload) {
  return {
    type: SAGA_INIT_CURRENT_ITEM_PRICE,
    payload
  }
}

export function initCurrentItemCountAC(payload) {
  return {
    type: INIT_CURRENT_ITEM_COUNT,
    payload
  }
}

export function initCurrentItemAmountAC(payload) {
  return {
    type: INIT_CURRENT_ITEM_AMOUNT,
    payload
  }
}

export function clearCurrentItemAC() {
  return {
    type: CLEAR_CURRENT_ITEM,
  }
}
