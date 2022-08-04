import { useState } from "react"

export default async (headers) =>{
    const [state,setState] = useState({
        data:{},
        status:null,
        error:null
    })
    const send = async ()=>{
        const res = await (await fetch(headers)).json()
        if(!res.ok){
            setState(s=>{
                return {
                data:null,
                status:res.status,
                error:res.error
                }
            })
        } else {
            setState({
                data:res,
                status:res.status,
                error:null
            })
        }

    }
    return [state,send]

}