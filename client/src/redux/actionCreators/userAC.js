import { CLEAR_USER_MESSAGE, LOGGEDIN_USER, LOGOUT_USER, SAGA_LOGGEDIN_USER } from '../actionTypes/userAT'

export function loggedInUserAC(payload) {
  return {
    type: LOGGEDIN_USER,
    payload
  }
}

export function fetchLoggedInUserAC(payload) {
  return {
    type: SAGA_LOGGEDIN_USER,
    payload
  }
}

export function loggedOutUserAC() {
  return {
    type: LOGOUT_USER,
  }
}

export function clearUserMessageAC() {
  return {
    type: CLEAR_USER_MESSAGE,
  }
}
