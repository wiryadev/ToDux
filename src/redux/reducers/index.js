import { combineReducers } from "@reduxjs/toolkit";
import ToDuxReducer from "./ToDuxReducer";

export default combineReducers({
  todux: ToDuxReducer,
})