import { useState } from 'react'
import socket,{authenticated} from '../index'


export default function useSocket(event){
    const [state,setState] = useState(null)
    socket.on(event,(data)=>{
        setState(data) 
    })
    return state
} 