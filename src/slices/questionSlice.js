import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../_DATA";
const questionAdapter=createEntityAdapter({});
const initialState=questionAdapter.getInitialState({
    status: "idle",
});
export const fetchQuestions=createAsyncThunk("question/featchQuestions",async()=>{
    const response= await _getQuestions();
    return response;
})
export const saveQuestionAnswer=createAsyncThunk("question/saveQuestionAnswer",async({authedUser, qid, answer})=>{
    console.log(authedUser, qid, answer);
    await _saveQuestionAnswer({authedUser, qid, answer})
    
    return {authedUser, qid, answer}
});
export const addQuestion=createAsyncThunk("question/addQuestion", async(data)=>{
    await _saveQuestion(data);
    return data
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