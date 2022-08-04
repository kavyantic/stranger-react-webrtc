import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'ui',
    initialState:{
        searchBarVis:false,
        drawerVis:false
    },
    reducers:{
        setSearchBarVis(state,action){
            state.searchBarVis  = action.payload
        }
        , 
        toggleDrawerVis(state,action){
            state.drawerVis  = action.payload
        }
    }
    
})


export const uiActions = uiSlice.actions 
export default uiSlice