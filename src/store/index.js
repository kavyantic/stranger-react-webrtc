import {configureStore} from  '@reduxjs/toolkit'
import authSlice from './authSlice'
import themeSlice from './themeSlice'
import uiSlice from './uiSlice'


export default configureStore({
    reducer:{
        theme:themeSlice.reducer,
        auth:authSlice.reducer,
        ui:uiSlice.reducer,
    },
    
}) 

  