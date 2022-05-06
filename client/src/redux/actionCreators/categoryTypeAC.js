import { SAGA_INIT_CATEGORY_TYPES, INIT_CATEGORY_TYPES, GET_CATEGORY_TYPE_ID } from "../actionTypes/categoryTypesAT";

export function initCategoryTypesAC(payload) {
  return {
    type: INIT_CATEGORY_TYPES,
    payload
  }
}

export function getCategoryTypeIdAC(payload) {
  return {
    type: GET_CATEGORY_TYPE_ID,
    payload
  }
}

export function fetchInitCategoryTypesAC(payload) {
  return {
    type: SAGA_INIT_CATEGORY_TYPES,
    payload
  }
}
