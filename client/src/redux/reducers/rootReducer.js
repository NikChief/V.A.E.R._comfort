import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { userReducer} from "./userReducer";
import { basketReducer } from "./basketReducer";
import { colorsReducer } from "./colorsReducer";
import { itemReducer } from "./itemReducer";
import { materialsReducer } from "./materialsReducer";
import { typesReducer } from "./typesReducer";
import { categoryTypesReducer } from "./categoryTypesReducer";
import { ordersDetailsReducer } from "./ordersDetailsReducer";
import { patternReducer } from "./patternReducer";



export const rootReducer = combineReducers({
  userState: userReducer,
  ordersState: ordersReducer,
  orderDetails: ordersDetailsReducer,
  basketState: basketReducer,
  itemState: itemReducer,
  colorsState: colorsReducer,
  materialsState: materialsReducer,
  typesState: typesReducer,
  categoryTypesState: categoryTypesReducer,
  patternState: patternReducer,
})
