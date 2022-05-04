import { INIT_COLORS, SAGA_INIT_COLORS } from "../actionTypes/colorsAT";

export function initColorsAC(payload) {
  return {
    type: INIT_COLORS,
    payload
  }
}

export function fetchInitColorsAC() {
  return {
    type: SAGA_INIT_COLORS,
  }
}
