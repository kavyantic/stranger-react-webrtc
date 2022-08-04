import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {useSelector,useDispatch} from 'react-redux'
import { Button } from "@mui/material";
import {toggleMode,setMode} from './store/themeSlice'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'

export default function App() {
  const dispatch = useDispatch()
  const mode = useSelector(state=>state.theme.mode)
  const name = useSelector(state=>state.auth.name)
  useEffect(()=>{
    const storageMode = localStorage.getItem('theme-mode')
   dispatch(setMode(
      storageMode
    ))
  },[])
  useEffect(()=>{
    localStorage.setItem('theme-mode',mode)
  },[mode])
  
  const theme = createTheme({
    palette: {
      mode:mode
    },  
  });
  const toggleThemeMode =()=>{dispatch(toggleMode())}

 
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatedRoutes/>
      </Layout>
    </ThemeProvider>
  );
}
