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
  InputLabel
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
        <Grid item sm={10} md={9} lg={9} xs={10} sx={{ margin: "auto" }}>
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
              <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 ,lg:1}}>
                
             <Grid item lg={12}  >
             <TextField
                
                fullWidth
                label="Coupon code"
              />
             </Grid>
             <Grid item lg={12}>
             <TextField
                
                fullWidth
                label="Coupon Description"
              
              />
             </Grid>
             <Grid item lg={4.6}>
             <TextField
                
                fullWidth
                label="Brand"
            
              />
             </Grid><Grid item lg={4.6}>
             <TextField
                fullWidth
                label="Discount"
              
              />
             </Grid><Grid item lg={2.8}>
             <TextField
                required
                fullWidth
                label="Discount Type"
               
              />
             </Grid><Grid item lg={4.6}>
             <TextField
                fullWidth
                label="Minimum Amount(Optional)"

              />
             </Grid><Grid item lg={4.6}>
             <TextField
                fullWidth
                label="Upto Amount"

              />
             </Grid><Grid item lg={2.8}>
             <TextField
                fullWidth
                label="Used Limit"

              />
             </Grid><Grid item lg={8}>
             <TextField
                fullWidth
                label="User ids"

              />
             </Grid><Grid item lg={4}>
             <TextField
                fullWidth
                label="Coupon category"

              />
             </Grid><Grid item lg={6}>
             <TextField
                fullWidth
                label="Start Date"

              />
             </Grid><Grid item lg={6}>
             <TextField
                fullWidth
                label="End Date"

              />
             </Grid>
             
             <Grid item lg={8}>
             <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Coupon
              </Button>
             

             </Grid>
             
             

              </Grid>
               </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
