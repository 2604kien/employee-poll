import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { _getQuestions } from "../_DATA";
const questionAdapter=createEntityAdapter({});
const initialState=questionAdapter.getInitialState({
    status: "idle",
});
export const fetchQuestions=createAsyncThunk("question/featchQuestions",async()=>{
    const response=_getQuestions();
    console.log(JSON.stringify(response));
    return response;
})
const questionSlice= createSlice({
    name: "question",
    initialState: initialState,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestions.fulfilled, (state, action)=>{
            state.status="succeeded"
            state.entities=action.payload;
        })
    }
})
export default questionSlice.reducer;