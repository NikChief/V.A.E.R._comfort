import { INIT_PATTERNS, SAGA_INIT_PATTERNS } from "../actionTypes/patternsAT";

export function initPatternsAC(payload) {
  return {
    type: INIT_PATTERNS,
    payload
  }
}

export function fetchInitPatternsAC(payload) {
  return {
    type: SAGA_INIT_PATTERNS,
    payload
  }
}
