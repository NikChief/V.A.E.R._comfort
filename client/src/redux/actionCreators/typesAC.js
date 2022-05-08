import { SAGA_INIT_TYPES, INIT_TYPES } from "../actionTypes/typesAT";

export function initTypesAC(payload) {
  return {
    type: INIT_TYPES,
    payload
  }
}

export function fetchInitTypesAC(payload) {
  return {
    type: SAGA_INIT_TYPES,
    payload
  }
}
