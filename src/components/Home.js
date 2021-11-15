import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "gray",
  },
  GridTextField: {
    width: "100%",
  },
}));

const columns = [
    {
      name: "id",
      label: "id de usuario",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "nickName",
      label: "nombre",
      options: {
        display: true,
      },
    },
    {
        name: "lastName",
        label: "apellido",
        options: {
          display: true,
        },
      },
  ];


const options = {
  filterType: "checkbox",
};

function Home() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} style={{ margin: "10% 5% 0% 5%" }}>
          <Grid item spacing={2} container xs={3}>
            <Grid item xs={12} className={classes.GridTextField}>
              <TextField fullWidth label="nombre de usuario" />
            </Grid>
            <Grid item xs={12} className={classes.GridTextField}>
              <TextField fullWidth label="apellido" />
            </Grid>
            <Grid item fullWidth xs={12} className={classes.GridTextField}>
              <Button fullWidth variant="contained" className={classes.btn}>
                agregar
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={8} style={{width: "70%"}}>
            <MUIDataTable              
              title={"Usuarios"}
            //   data={data}
              columns={columns}
              options={options}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
