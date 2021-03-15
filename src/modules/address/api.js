export const getAddressRequest = () => {
	return fetch(`https://loft-taxi.glitch.me/addressList`).then(response => response.json());
};