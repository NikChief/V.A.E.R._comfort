import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { userReducer} from "./userReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  ordersState: ordersReducer,
})
