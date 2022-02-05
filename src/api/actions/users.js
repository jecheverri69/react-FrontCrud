import { formatstring, paths } from "../endPoints";
import axios from "axios";

export const getProducts = async () => {
	try {
		let url = formatstring(paths.users.getProducts);
		const response = await axios.get(url, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (err) {
		return { responseStatus: false, err };
	}
};

export const AddProduct = async (body) => {
	try {
		let url = formatstring(paths.users.addProduct);
		const response = await axios.post(url, body, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (err) {
		return { responseStatus: false, err };
	}
};
