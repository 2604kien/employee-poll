import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./userSlice";

const rootReducer=combineReducers({
    user: userReducers,
})
export default rootReducer;