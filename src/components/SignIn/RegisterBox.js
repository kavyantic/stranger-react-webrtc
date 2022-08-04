import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import StyledLink from "@mui/material/Link";

import {
  Link,
  useLocation,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";
import GoogleLogin from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Motion from "../AnimatedRoutes/Motion";

const responseGoogle = (response) => {
  console.log(response);
};

export default () => {
  console.log('register rendered')
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>   
                    
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                      <TextField
                        ref={email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        // onClick={()=>{
                        //   navigate('/register/varification')
                        // }}
                      >
                        Send OTP
                      </Button>
                      <GoogleLogin
                        clientId="92148838210-4l9veou0etokk1b917l6ilu93i57raa2.apps.googleusercontent.com"
                        render={(renderProps) => (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            <GoogleIcon sx={{ marginRight: "10px" }} /> Sign Up
                            with Google
                          </Button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />

                      <Link to="/login">
                        <StyledLink
                          variant="body2"
                          component="button"
                          underline="none"
                          align="center"
                        >
                          Login instead?
                        </StyledLink>
                      </Link>
                      {/* <Link to={'/register/varification'}>toself</Link> */}


                      <Grid container>
                        <Grid item xs></Grid>
                        <Grid item></Grid>
                      </Grid>
                    </Box>
                </>


               
  );
};
