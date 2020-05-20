import { combineReducers } from "redux";
import financeReducer from "./finance_reducer/index";
import resizeReducer from "./resizeReducer";

export default combineReducers({ financeReducer, resizeReducer });
