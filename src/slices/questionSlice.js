import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const questionAdapter=createEntityAdapter({});
const initialState=questionAdapter.getInitialState({
    status: "idle",
});
const questionSlice= createSlice({
    name: "question",
    initialState: initialState,
    reducer:{}
})
export default questionSlice.reducer;