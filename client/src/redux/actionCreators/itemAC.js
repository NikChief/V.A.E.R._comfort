import { INIT_CURRENT_ITEM } from "../actionTypes/itemAT";

export function initCurrentItemAC(payload) {
  return {
    type: INIT_CURRENT_ITEM,
    payload
  }
}
