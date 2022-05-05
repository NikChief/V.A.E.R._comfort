import { SAGA_INIT_CATEGORY_TYPES, INIT_CATEGORY_TYPES } from "../actionTypes/categoryTypesAT";

export function initCategoryTypesAC(payload) {
  return {
    type: INIT_CATEGORY_TYPES,
    payload
  }
}

export function fetchInitCategoryTypesAC(payload) {
  return {
    type: SAGA_INIT_CATEGORY_TYPES,
    payload
  }
}
