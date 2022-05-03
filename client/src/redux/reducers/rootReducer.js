import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { userReducer} from "./userReducer";
import { basketReducer } from "./basketReducer";
import { colorsReducer } from "./colorsReducer";
import { itemReducer } from "./itemReducer";


export const rootReducer = combineReducers({
  userState: userReducer,
  ordersState: ordersReducer,
  basketState: basketReducer,
  itemState: itemReducer,
  colorsState: colorsReducer,
})
