import { CLEAR_USER_MESSAGE, LOGGEDIN_USER, LOGOUT_USER, SAGA_LOGGEDIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from '../actionTypes/userAT'

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

export function fetchRegisterUserAC(payload) {
  return {
    type: SAGA_REGISTER_USER,
    payload
  }
}

export function loggedOutUserAC() {
  return {
    type: LOGOUT_USER,
  }
}

export function fetchLoggedOutUserAC() {
  return {
    type: SAGA_LOGOUT_USER,
  }
}

export function clearUserMessageAC() {
  return {
    type: CLEAR_USER_MESSAGE,
  }
}
