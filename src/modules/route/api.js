export const getRouteRequest = async (action) => {
	return fetch(`https://loft-taxi.glitch.me/route?address1=${action.payload.from}&address2=${action.payload.to}`)
		.then(response => response.json());
};
