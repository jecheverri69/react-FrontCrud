import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { DialogContent, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

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

function Home() {
  const d = new Date();
  const listUsers = [
    {
      id: 1,
      profesional: "Ricardo Suarez",
      fecha: d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear(),
      observaciones: "tiene una dentadura derecha y nonecesita brackets",
      tipo_profesional: "Odontologo",
    },
  ];
  const [users, setUsers] = useState(listUsers);
  const [profesional, setProfesional] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [tipo_profesional, setTipo_profesional] = useState("");

  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "profesional",
      label: "profesional",
      options: {
        display: true,
      },
    },
    {
      name: "fecha",
      label: "fecha",
      options: {
        display: true,
      },
    },
    {
      name: "observaciones",
      label: "observaciones",
      options: {
        display: true,
      },
    },
    {
      name: "tipo_profesional",
      label: "tipo de profesional",
      options: {
        display: true,
      },
    },
    {
      name: "eliminar",
      label: "Eliminar",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              variant="contained"
              style={{ backgroundColor: "red" }}
              onClick={() => deleteUser(tableMeta)}
            >
              Eliminar
            </Button>
          );
        },
      },
    },
  ];


  const handleObservaciones = (e) => {
    setObservaciones(e.target.value);
  };

  const handleProfesional = (e) => {
    setProfesional(e.target.value);
  };

  const handleTipo_profesional = (e) => {
    setTipo_profesional(e.target.value);
  };

  const deleteUser = async (tableMeta) => {
      users.splice(tableMeta.rowIndex, 1)
	  setUsers(users)
	  console.log(users)
	  setProfesional({})
	 
		  alert("eliminado correctamente (escribe algo en el formulario para ver el cambio)")
		  setProfesional("")
		  setTipo_profesional("")
		  setObservaciones("")		  
	  
  };

  const addUser = () => {
    if (profesional == "" || observaciones == "" || tipo_profesional == "") {
      alert("debe llenar todos los campos");
    } else {
		if(users.length == 0){
		var id = 1
		}else{
			var id = (users[users.length - 1]['id']) + 1
		}
		var b = users.length	
      let body = {
        id: id,
        profesional: profesional,
        fecha: d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear(),
        observaciones: observaciones,
        tipo_profesional: tipo_profesional,
      };
	  users.push(body)	
	  setUsers(users)
	  console.log(users)
	  if (users.length > b){
		  alert("agregado correctamente")
		  setProfesional({})
		  setProfesional("")
		  setTipo_profesional("")
		  setObservaciones("")		  
	  }
    }
  };

  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography style={{ margin: "3% 50% 0%", fontSize: "2em" }}>
          Controles
        </Typography>
        <Grid container spacing={2} style={{ margin: "10% 5% 0% 5%" }}>
          <Grid item spacing={2} container xs={3}>
            <Grid item xs={12} className={classes.GridTextField}>
              <TextField
                fullWidth
                onChange={handleProfesional}
                value={profesional}
                label="nombre de profesional"
              />
            </Grid>
            <Grid item xs={12} className={classes.GridTextField}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={2}
                placeholder="observaciones"
                variant="outlined"
                style={{ width: 200 }}
                onChange={handleObservaciones}
                value={observaciones}
              />
            </Grid>
            <Grid item xs={12} className={classes.GridTextField}>
              <TextField
                fullWidth
                onChange={handleTipo_profesional}
                value={tipo_profesional}
                label="tipo de profesional"
              />
            </Grid>
            <Grid item fullWidth xs={12} className={classes.GridTextField}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => addUser()}
                className={classes.btn}
              >
                agregar
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={8} style={{ width: "70%" }}>
            <MUIDataTable
              title={"Usuarios"}
              data={users}
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
