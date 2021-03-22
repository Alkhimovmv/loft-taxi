import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";
import rootReducer from "../../modules";
import { sendAuthRequest, sendAuthSuccess } from "../../modules/authAndRegister";

describe("LoginForm", () => {
	it("render correctly", () => {
		let store = createStore(
			rootReducer,
			applyMiddleware(store => next => action => {
				if (action.type === sendAuthRequest.toString()) {
					expect(action.payload).toStrictEqual({
						email: "testemail",
						password: "testpassword"
					});
					return store.dispatch(sendAuthSuccess());
				}
				return next(action);
			})
		);

		let { getByTestId } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<LoginForm />
				</Provider>
			</MemoryRouter>
		);

		fireEvent.change(getByTestId("inputName"), { target: { value: "testemail" } });
		fireEvent.change(getByTestId("inputPassword"), { target: { value: "testpassword" } });
        fireEvent.submit(getByTestId("buttonLogin"));
	});
});
