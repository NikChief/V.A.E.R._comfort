import { LOGGEDIN_USER } from '../actionTypes/userAT'

export function loggedInUserAC(payload) {
  return {
    type: LOGGEDIN_USER,
    payload
  }
}
