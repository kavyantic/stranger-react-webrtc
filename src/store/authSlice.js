import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:false,
        username:'',
        name:'',
        email:'',
        token:null,
        profileImage:null
    },
    reducers:{
        setName(state,action){
            state.name  = action.payload
        }
    }
    
})

export const {setName} = authSlice.actions
export default authSlice