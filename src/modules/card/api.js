export const postCardRequest = async (action) => {
	const token = window.localStorage.getItem("token");
	return fetch(`https://loft-taxi.glitch.me/card`, {
		method: "POST", 
		headers: {"Content-Type": "application/json"}, 
		body: JSON.stringify({ ...action.payload, token }) })
		.then(response => response.json());
};

export const getCardRequest = async () => {
	const token = window.localStorage.getItem("token");
	return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
		method: "POST", 
		headers: {"Content-Type": "application/json"}, 
		body: JSON.stringify({ token }) })
		.then(response => response.json());
};