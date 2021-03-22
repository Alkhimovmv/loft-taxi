import axios from "axios";

export const getAddressRequest = () => {
	return axios.get(`/addressList`).then(response => {
		return response.data;
	});
};