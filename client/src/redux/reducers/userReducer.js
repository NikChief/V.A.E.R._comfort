import { LOGGEDIN_USER, LOGGEDOUT_USER } from '../actionTypes/userAT'

const initialState = { user: {} }


export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGEDIN_USER:
      return {
        ...state, user: action.payload
      }

    case LOGGEDOUT_USER:
      return {
        ...state, user: {}
      }

    default:
      return state
  }
}
