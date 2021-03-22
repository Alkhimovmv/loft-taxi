import axios from "axios";

const token = window.localStorage.getItem("token");

export const postCardRequest = (action) => {
	return axios
		.post(`/card`, { ...action.payload, token })
		.then(response => {
			if (!response.data.success) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};

export const getCardRequest = () => {
	return axios
		.get(`/card?token=${token}`)
		.then(response => {
			if (response.data.hasOwnProperty("error")) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};