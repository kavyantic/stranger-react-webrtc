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

import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

const responseGoogle = (response) => {
  console.log(response);
};

export default () => {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email.current, password.current);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        spacing={2}
        sx={{ margin: "auto", minHeight: 200, marginTop: 5, display: "flex" }}
      >
        <Grid item sm={10} md={6} lg={4} xs={10} sx={{ margin: "auto" }}>
          <Paper
            variant="outlined"
            sx={{
              margin: "auto",
              height: "100%",
              width: "100%",
              padding: 3,
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
            }}
            color="inherit"
          >
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
              <TextField
                ref={password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
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
                    <GoogleIcon sx={{ marginRight: "10px" }} /> Sign in with
                    Google
                  </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />

              <Link to="/register">
                <StyledLink
                  variant="body2"
                  component="button"
                  underline="none"
                  align="center"
                >
                  Dont have an account? Register.
                </StyledLink>
              </Link>

              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
