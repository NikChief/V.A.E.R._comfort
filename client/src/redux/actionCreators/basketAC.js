import { ADD_ITEM_TO_BASKET, GET_ITEMS_INFO_FROM_DB, INIT_BASKET_TOTAL } from "../actionTypes/basketAT";

export function addItemToBasketAC(payload) {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload
  }
}

export function getItemsInfoFromDbAC(payload) {
  return {
    type: GET_ITEMS_INFO_FROM_DB,
    payload
  }
}

export function initBasketTotalAC(payload) {
  return {
    type: INIT_BASKET_TOTAL,
    payload
  }
}
