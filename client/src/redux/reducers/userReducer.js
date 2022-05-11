import { CLEAR_USER_MESSAGE, EDIT_USER, EDIT_USER_NAME, EDIT_USER_EMAIL, LOGGEDIN_USER, LOGOUT_USER } from '../actionTypes/userAT'

const initialState = { user: '' }


export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGEDIN_USER:
      return {
        ...state, user: action.payload
      }

    case LOGOUT_USER:
      return { 
        ...state, 
        user: { 
          loggedIn: false 
        } 
      }

    case CLEAR_USER_MESSAGE:
      return {
        ...state, user: { ...state.user, message: undefined }
      }

    case EDIT_USER:
      if (action.payload.successLogout) {
        return {
          ...state, user: { loggedIn: false }
        }
      } else {
        return {
          ...state, user: { 
            ...state.user, 
            editErrorMessage: action.payload.message 
          }
        }
      }

    default:
      return state
  }
}
