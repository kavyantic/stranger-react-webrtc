import { Box, Button, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'
import Motion from '../AnimatedRoutes/Motion'
import StyledLink from '@mui/material/Link'


export default function RegistrationStepOne() {
  return (
    <Motion>
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

    <Grid container>
      <Grid item xs></Grid>
      <Grid item></Grid>
    </Grid>
  </Box>
  </Motion>  )
}
