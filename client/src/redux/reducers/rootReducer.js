import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { colorsReducer } from "./colorsReducer";
import { itemReducer } from "./itemReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  basketState: basketReducer,
  itemState: itemReducer,
  colorsState: colorsReducer,
})
