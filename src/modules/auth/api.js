import axios from "axios";

export const postAuthRequest = (payload) => {
	return axios
		.post(`https://loft-taxi.glitch.me/auth`, payload)
		.then(response => {
			if (!response.data.success) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};
export const postRegisterRequest = (payload) => {
	return axios
		.post(`https://loft-taxi.glitch.me/register`, payload)
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