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
import {
	getUsers,
	AddUser,
	DeleteUser,
	UpdateUser,
} from "../Api/actions/users";
import Dialog from "@mui/material/Dialog";

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
	const [users, setUsers] = useState([]);
	const [nickName, setNickName] = useState("");
	const [lastName, setLastName] = useState("");
	const [editNickName, setEditNickName] = useState("");
	const [editLastName, setEditLastName] = useState("");
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [idUserEdit, setIdUserEdit] = useState(-1);

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

		{
			name: "editar",
			label: "Editar",
			options: {
				filter: true,
				sort: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<Button
							variant="contained"
							style={{ backgroundColor: "green" }}
							onClick={() => updateUser(tableMeta)}
						>
							Actualizar
						</Button>
					);
				},
			},
		},
	];

	useEffect(async () => {
		const response = await getUsers();
		setUsers(response);
	}, []);

	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleNickName = (e) => {
		setNickName(e.target.value);
	};

	const handleEditNickName = (e) => {
		setEditNickName(e.target.value);
	};

	const handleEditLastName = (e) => {
		setEditLastName(e.target.value);
	};

	const deleteUser = async (tableMeta) => {
		let body = {
			id: tableMeta.rowData[0],
		};
		const response = await DeleteUser(body);
		if (response == "borrado correctamente") {
			debugger;
			const response2 = await getUsers();

			setUsers(response2);
		}
	};

	const editUser = async () => {
		let body = {
			id: idUserEdit,
			nickName: editNickName,
			lastName: editLastName,
		};
		const response = await UpdateUser(body);
	};

	const updateUser = (tableMeta) => {
		setOpenModalEdit(true);

		setIdUserEdit(tableMeta.rowData[0]);
		setEditNickName(tableMeta.rowData[1]);
		setEditLastName(tableMeta.rowData[2]);
	};

	const addUser = async () => {
		if (nickName == "" || lastName == "") {
			alert("debe llenar todos los campos");
		} else {
			let body = {
				nickName: nickName,
				lastName: lastName,
			};
			const response = await AddUser(body);
			debugger;
			if (response == "añadido correctamente") {
				const response2 = await getUsers();
				setLastName("");
				setNickName("");
				setUsers(response2);
			} else {
				alert("hubo un error");
			}
		}
	};

	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Grid container spacing={2} style={{ margin: "10% 5% 0% 5%" }}>
					<Grid item spacing={2} container xs={3}>
						<Grid item xs={12} className={classes.GridTextField}>
							<TextField
								fullWidth
								onChange={handleNickName}
								value={nickName}
								label="nombre de usuario"
							/>
						</Grid>
						<Grid item xs={12} className={classes.GridTextField}>
							<TextField
								fullWidth
								onChange={handleLastName}
								value={lastName}
								label="apellido"
							/>
						</Grid>
						<Grid item fullWidth xs={12} className={classes.GridTextField}>
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
					<Grid item xs={8} style={{ width: "70%" }}>
						<MUIDataTable
							title={"Usuarios"}
							data={users}
							columns={columns}
							options={options}
						/>
					</Grid>
				</Grid>
				<Dialog open={openModalEdit} title={"Editar Usuario"}>
					<DialogContent>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<TextField
									value={editNickName}
									onChange={handleEditNickName}
									required
									id="name"
									label="Nombre"
									type="text"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									value={editLastName}
									onChange={handleEditLastName}
									required
									id="name"
									label="Apellido"
									type="text"
									fullWidth
								/>
							</Grid>

							<Grid item xs={12} md={12}>
								<Button
									variant="contained"
									color="primary"
									onClick={editUser}
									style={{ display: "flex", margin: "auto" }}
								>
									Guardar
								</Button>
							</Grid>
						</Grid>
					</DialogContent>
				</Dialog>
			</ThemeProvider>
		</div>
	);
}

export default Home;
