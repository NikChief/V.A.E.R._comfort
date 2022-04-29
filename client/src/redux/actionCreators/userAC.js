import { LOGGEDIN_USER, LOGGEDOUT_USER } from '../actionTypes/userAT'

export function loggedInUserAC(payload) {
  return {
    type: LOGGEDIN_USER,
    payload
  }
}

export function loggedOutUserAC(payload) {
  return {
    type: LOGGEDOUT_USER,
    payload
  }
}
