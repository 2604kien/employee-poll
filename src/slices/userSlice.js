import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../_DATA";
const userAdapter=createEntityAdapter({});
const initialState = userAdapter.getInitialState({
    status: 'idle', // or 'loading', 'succeeded', 'failed' depending on your use case
    isAuthenticated: false,
    currentUser:{},
  });

//fetch user data
export const fetchUsers= createAsyncThunk('users/fetchUsers', async ()=>{
    try{
        const response = await _getUsers();
        return response;
        
    }
    catch(error){
    }
})

const userSlice=createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        verifyLogin:(state, action)=>{
            const arrayObject=Object.values(state.entities) //because state is associated object so we convert it to array of values
            for(let i=0; i< arrayObject.length; i++){
                if(arrayObject[i]["id"]===action.payload.username && arrayObject[i]["password"]===action.payload.password){
                    state.currentUser={...arrayObject[i]};
                    state.isAuthenticated=true;
                    break;
                }
            }
            
        },
        getCurrentUser:(state, action)=>{
            const arrayObject=Object.values(state.entities)
            for(let i=0; i< arrayObject.length; i++){
            if(arrayObject[i]["id"]===action.payload){
                state.currentUser={...arrayObject[i]};
                break;
            }
        }
        },
        logout:(state, action)=>{
            state.isAuthenticated=false;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.entities=action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = 'failed';
          });
    }
})
export const {verifyLogin, logout, getCurrentUser}=userSlice.actions;
export const getUserStatus=(state)=> state.user.status;
export default userSlice.reducer;