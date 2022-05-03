import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  basketState: basketReducer,
})
