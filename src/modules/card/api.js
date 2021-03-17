import axios from "axios";

export const postCardRequest = (action) => {
	const token = window.localStorage.getItem("token");
	return axios
		.post(`https://loft-taxi.glitch.me/card`, { ...action.payload, token })
		.then(response => {
			if (!response.data.success) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};

export const getCardRequest = () => {
	const token = window.localStorage.getItem("token");
	return axios
		.get(`https://loft-taxi.glitch.me/card?token=${token}`)
		.then(response => {
			if (response.data.hasOwnProperty("error")) {
				throw Error(response.data.error);
			}
			return response.data;
		});
};