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
	getProducts,
} from "../api/actions/products";
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

function Products() {
	const [Products, setProducts] = useState([]);

	const columns = [
		{
			name: "idProducto",
			label: "id de producto",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "nombreProducto",
			label: "nombre",
			options: {
				display: true,
			},
		},
		{
			name: "descripcionProducto",
			label: "descripcion",
			options: {
				display: true,
			},
		},
		{
			name: "categoriaProducto.nombreCategoria",
			label: "categoria",
			options: {
				display: true,
			},
		},
		{
			name: "Comprar",
			label: "Comprar",
			options: {
				filter: true,
				sort: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<Button
						variant="contained"
							style={{ backgroundColor: "red" }}
						>
							Comprar
						</Button>
					);
				},
			},
		},
	];

	useEffect(async () => {
		debugger
		const response = await getProducts();
		debugger
		setProducts(response);
	}, []);
	
	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Header/>
				<Grid container spacing={2} style={{ margin: "10% 5% 0% 5%" }}>
					<Grid item xs={10} style={{ width: "100%" }}>
						<MUIDataTable
							title={"Productos"}
							data={Products}
							columns={columns}
							options={options}
						/>
					</Grid>
				</Grid>
				
			</ThemeProvider>
		</div>
	);
}

export default Products;
