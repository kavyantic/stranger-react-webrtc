import React, { Fragment } from "react";
import Footer from "./BottomBar";
import Header from "./Header";
import DrawerMenu from './DrawerMenu'
import "./Layout.css";
import { useMediaQuery } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";


export default function Layout({children}) {
  const isMobile = !useMediaQuery("(min-width:800px)");

  return (
    <Fragment>
      <CssBaseline/>
      <Header/>
      <DrawerMenu/>  
        <main>
          {children}
        </main>
      {isMobile && <Footer/>} 
    </Fragment>
  );
}



