import { ADD_ITEM_TO_BASKET } from "../actionTypes/basketAT";

export function addItemToBasketAC(payload) {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload
  }
}


