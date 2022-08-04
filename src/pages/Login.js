import React, { useEffect } from 'react'
import LoginBox from '../components/SignIn/LoginBox.jsx'
import Motion from '../components/AnimatedRoutes/Motion'
import {gapi} from 'gapi-script'


export default function Login() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:'92148838210-4l9veou0etokk1b917l6ilu93i57raa2.apps.googleusercontent.com',
        scope:""
      })
    }
    gapi.load('client:auth2',start)
  })
  return (
    <>
       <LoginBox/>

    </>
    
  )
}
