import { INIT_MATERIALS, SAGA_INIT_MATERIALS } from "../actionTypes/materialsAT"

export function initMaterialsAC(payload) {
  return {
    type: INIT_MATERIALS,
    payload
  }
}

export function fetchInitMaterialsAC(payload) {
  return {
    type: SAGA_INIT_MATERIALS,
    payload
  }
}
