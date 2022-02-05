import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { DialogContent, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { getProducts, AddProduct } from "../api/actions/products";
import Dialog from "@mui/material/Dialog";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "gray",
  },
  GridTextField: {
    width: "100%",
  },
}));

const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "scroll",
};

function Add() {
  const [users, setUsers] = useState([]);
  const [Products, setProducts] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");



  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleProducts = (e) => {
    setProducts(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const addUser = async () => {
    if (Products == "" || Description == "" || Category == "") {
      alert("debe llenar todos los campos");
    } else {
      let body = {
        nombreProducto: Products,
        descripcionProducto: Description,
        categoriaProducto: {
          idCategoria: parseInt(Category),
        },
      };
      const response = await AddProduct(body);
      debugger;
      if (response == "añadido correctamente") {
        setDescription("");
        setCategory("");
        setProducts("");
      } else {
        alert("hubo un error");
      }
    }
  };

  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container spacing={2} style={{ margin: "10% 0.00001%" }}>
          <Grid item xs={12} className={classes.GridTextField}>
            <TextField
              fullWidth
              onChange={handleProducts}
              value={Products}
              label="nombre de producto"
            />
          </Grid>
          <Grid item xs={12} className={classes.GridTextField}>
            <TextField
              fullWidth
              onChange={handleDescription}
              value={Description}
              label="descripcion del producto"
            />
          </Grid>
          <Grid item xs={12} className={classes.GridTextField}>
            <TextField
              fullWidth
              onChange={handleCategory}
              value={Category}
              label="id categoria"
            />
          </Grid>
          <Grid
            item
            xs={5}
            style={{ margin: "auto" }}
            className={classes.GridTextField}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={addUser}
              className={classes.btn}
            >
              agregar
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Add;
