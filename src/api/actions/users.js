import { formatstring, paths } from "../endPoints";
import axios from "axios";

export const getUsers = async () => {
	try {
		let url = formatstring(paths.users.getUsers);
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

export const AddUser = async (body) => {
	try {
		let url = formatstring(paths.users.addUser);
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

export const DeleteUser = async (body) => {
	try {
		let url = formatstring(paths.users.deleteUser);
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

export const UpdateUser = async (body) => {
	try {
		let url = formatstring(paths.users.updateUser);

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
