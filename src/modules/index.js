import { combineReducers } from "redux";
import auth from "./authAndRegister";
import card from "./card";
import address from "./addressList";
import route from "./route";
import { logout } from "./authAndRegister/actions";

const rootReducer = combineReducers({
	auth,
	card,
	address,
	route
});

export default (state, action) => {
	if (action.type === logout.toString()) {
		state = undefined;
	}

	return rootReducer(state, action);
};