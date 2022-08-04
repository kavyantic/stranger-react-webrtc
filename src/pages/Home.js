import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Motion from "../components/AnimatedRoutes/Motion";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { startLocalStream } from "../store/thunks/mediaThunk";
import { useDispatch, useSelector } from "react-redux";
import { MediaContext } from "../store/mediaContext";
import "./home.css";
import { useMediaQuery } from "@mui/material";
import ChatConsole from "../components/chatConsole/ChatConsole"
export default function Home() {
  const localVid = React.useRef(null);
  const remoteVid = React.useRef(null);
  const dispatch = useDispatch();
  const mediaCtx = React.useContext(MediaContext);
  const {
    media: { localStream, remoteStream },
    startLocalStream,
  } = mediaCtx;
  const isSM = !useMediaQuery("(min-width:900px)");
 
  React.useEffect(() => {
    localVid.current.srcObject = localStream;
    const playVidOnLoad = (e) => {
      e.target.play();
    };
    localVid.current.addEventListener("loadedmetadata", playVidOnLoad);
    return () => {
      if(localVid.current){
        localVid.current.removeEventListener("loadedmetadata", playVidOnLoad);
      }
    };
  }, [localStream, localVid]);

  React.useEffect(() => {
    remoteVid.current.srcObject = localStream;
    const playVidOnLoad = (e) => {
      e.target.play();
    };
    remoteVid.current.addEventListener("loadedmetadata", playVidOnLoad);
    return () => {
      if(remoteVid.current){
        remoteVid.current.removeEventListener("loadedmetadata", playVidOnLoad);
      }
    };
  }, [localStream, remoteVid]);

  return (
    <>
      <Grid container   sx={{ padding: "5px" }}>
        <Grid  item  sm={12} md={6} lg={6} xs={12}>
          <Box  sx={{position:'relative'}}>
          <video
            id="local_vid"
            style={{  backgroundColor: "black" }}
            onClick={() => {
              startLocalStream({
                // audio: true,
                video: true,
              });
              
          
            }}
            
            ref={localVid}
            // height="300"
            width="100%"
          ></video>
          <video
              id="remote_vid"
              style={{ backgroundColor: "grey",position:'fixed',bottom:'0',right:"0" }}
              ref={remoteVid}
              height="200px"
              width="150px"
            ></video>
          </Box>
         
        </Grid>
        <Grid  item sm={12} md={6} lg={6} xs={12}>
            <ChatConsole/>
        </Grid>
      </Grid>
    </>
  );
}


