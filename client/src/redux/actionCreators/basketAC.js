import { ADD_ITEM_TO_BASKET, CLEAR_BASKET, DELETE_ITEM_FROM_BASKET, GET_ITEMS_INFO, INIT_BASKET_TOTAL, SAGA_GET_ITEMS_INFO } from "../actionTypes/basketAT";

export function addItemToBasketAC(payload) {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload
  }
}

export function getItemsInfoAC(payload) {
  return {
    type: GET_ITEMS_INFO,
    payload
  }
}

export function fetchItemsInfoAC(payload) {
  return {
    type: SAGA_GET_ITEMS_INFO,
    payload
  }
}

export function initBasketTotalAC(payload) {
  return {
    type: INIT_BASKET_TOTAL,
    payload
  }
}

export function clearBasketAC() {
  return {
    type: CLEAR_BASKET,
  }
}

export function deleteItemFromBasketAC(payload) {
  return {
    type: DELETE_ITEM_FROM_BASKET,
    payload,
  }
}
