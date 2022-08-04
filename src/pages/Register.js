import React, { useEffect } from "react";
import Motion from "../components/AnimatedRoutes/Motion";
import { gapi } from "gapi-script";
import RegisterBox from "../components/SignIn/RegisterBox";
import { Box } from "@mui/system";
import { Grid, Paper } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";

export default function Login() {
  const match = useLocation();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "92148838210-4l9veou0etokk1b917l6ilu93i57raa2.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
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
            <Routes location={match} key={match.pathname}>
              <Route path={`/`} element={<RegisterBox />} />
              <Route path={"/varification"} element={<h1 >fuck you</h1>} />
            </Routes>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
