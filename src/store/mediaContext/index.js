import {createContext, useReducer} from 'react'
import React from 'react'
const MediaContext = createContext()

const initialState={
    localStream:null,
    remoteStream:null
}
const actions = {
    SET_LOCAL_STREAM:'SET_LOCAL_STREAM',
    SET_REMOTE_STREAM:'SET_REMOTE_STREAM'
}

const reducer = (state,action)=>{
    console.log(state,action);
    switch(action.type){
        case actions.SET_LOCAL_STREAM:{
            return {
                ...state,
                localStream:action.payload
            }  
        }
        case actions.SET_REMOTE_STREAM:{
            return {
                ...state,
                remoteStream:action.payload
            }
        }
        default:{
            return state
        }
    }
       
      
}


const Provider = ({children})=>{
    const [state,dispatch]= useReducer(reducer,initialState)

    const value =  {
        media:state,
        startLocalStream:(payload)=>{
            navigator.mediaDevices.getUserMedia(payload).then(stream=>{
                dispatch({type:actions.SET_LOCAL_STREAM, payload:stream})

            })
        },
        setMediaStream:(payload)=>{
            dispatch({type:actions.SET_REMOTE_STREAM,payload})
        }
    }

    return <MediaContext.Provider value={value}>
        {children}
    </MediaContext.Provider>

}


export default Provider
export {MediaContext}