import { LOGGEDIN_USER, LOGOUT_USER } from '../actionTypes/userAT'

const initialState = { user: '' }


export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGEDIN_USER:
      console.log('action.payload', action.payload)
      return {
        ...state, user: action.payload
      }

    case LOGOUT_USER:
      return {...state, user: {loggedIn: false}}

    default:
      return state
  }
}
