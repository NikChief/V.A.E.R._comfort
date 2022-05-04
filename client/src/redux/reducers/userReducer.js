import { CLEAR_USER_MESSAGE, LOGGEDIN_USER, LOGOUT_USER } from '../actionTypes/userAT'

const initialState = { user: '' }


export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGEDIN_USER:
      return {
        ...state, user: action.payload
      }

    case LOGOUT_USER:
      return {...state, user: {loggedIn: false}}

    case CLEAR_USER_MESSAGE:
      return {
        ...state, user: {...state.user, message: undefined}
      }

    default:
      return state
  }
}
