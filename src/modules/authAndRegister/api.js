import axios from "axios";

export const postAuthRequest = (payload) => {
	return axios
		.post(`/auth`, payload)
		.then(response => {
			if (!response.data.success) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};

export const postRegisterRequest = (payload) => {
	return axios
		.post(`/register`, payload)
		.then(response => {
			if (!response.data.success) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};

export const saveToken = token => {
	window.localStorage.setItem("token", token);
};