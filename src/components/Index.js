import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./style/theme";
import Header from "./Header"

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "gray",
  },
  GridTextField: {
    width: "100%",
  },
}));


function index() {
 
  return (
    <div>
      <ThemeProvider theme={theme}>
       <Header/>
            <Typography>principal</Typography>
          
      </ThemeProvider>
    </div>
  );
}

export default index;
