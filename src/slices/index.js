import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import questionReducers from "./questionSlice";

const rootReducer=combineReducers({
    user: userReducers,
    question: questionReducers,
})
export default rootReducer;