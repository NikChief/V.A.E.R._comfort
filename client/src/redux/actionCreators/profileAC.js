import { GET_ORDERS_INFO, GET_PERSONAL_INFO } from "../actionTypes/profileAT";

export function getPersonalInfoAC() {
  return {
    type: GET_PERSONAL_INFO,
  }
}

export function getOrdersInfoAC() {
  return {
    type: GET_ORDERS_INFO,
  }
}
