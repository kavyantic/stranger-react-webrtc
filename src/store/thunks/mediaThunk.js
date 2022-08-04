import { createAsyncThunk } from "@reduxjs/toolkit";



const startLocalStream = createAsyncThunk('media/setLocalStream',async ()=>{
    const stream = await navigator.mediaDevices
        .getUserMedia({
      audio: true,
      video: true,
    })
    return stream
       
})

export {startLocalStream}