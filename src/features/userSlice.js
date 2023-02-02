import {createSlice} from "@reduxjs/toolkit"
import {configureStore} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
        
        },
        logout:(state)=>{
            state.user = null;
        }
    },

})


export const  {login,logout} = userSlice.actions;

export const selectUser = (state) => state.user


const store =   configureStore({
    reducer :userSlice.reducer
})
export default store
