import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { userReducer} from "./userReducer";
import { basketReducer } from "./basketReducer";


export const rootReducer = combineReducers({
  userState: userReducer,
  ordersState: ordersReducer,
  basketState: basketReducer,
})
