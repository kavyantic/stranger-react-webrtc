import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import IconButton  from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'
import { Link, useNavigate } from "react-router-dom";
import {toggleMode} from '../../store/themeSlice'
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { useMediaQuery } from "@mui/material";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMobile = !useMediaQuery("(min-width:800px)");


  return (
    <React.Fragment>
      <HideOnScroll {...props}>
       <AppBar >
          <Toolbar >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={()=>{dispatch(uiActions.toggleDrawerVis(true))}}

            >
              <MenuIcon />
            </IconButton>
            <Box sx={{flexGrow:1}}>
              <h2 className="app_title" variant="h6" color="inherit"  component="div">
              <Link to="/">
                STRANGER
                </Link>
              </h2>
            </Box>
          
            <Button color="inherit" onClick={()=>{dispatch(toggleMode())}} variant="outlined">Theme</Button>
            <Button color="inherit" onClick={()=>{navigate('/login')}} variant="outlined">Login</Button>
          </Toolbar>
          
          
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
