import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import SignupForm from "./SignupForm";
import rootReducer from "../../modules";
import { sendRegisterRequest, sendRegisterSuccess } from "../../modules/authAndRegister";

describe("SignupForm", () => {
	it("render correctly", () => {
		let store = createStore(
			rootReducer,
			applyMiddleware(store => next => action => {
				if (action.type === sendRegisterRequest.toString()) {
					expect(action.payload).toStrictEqual({
						email: "test@test.com",
						password: "testpassword",
						name: "testname",
						surname: "testsurname"
					});
					return store.dispatch(sendRegisterSuccess());
				}
				return next(action);
			})
		);

		let { getByTestId, getByText } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<SignupForm />
				</Provider>
			</MemoryRouter>
		);

		fireEvent.change(getByTestId("inputEmail"), {
			target: { value: "test@test.com" }
		});

		fireEvent.change(getByTestId("inputPassword"), {
			target: { value: "testpassword" }
		});

		fireEvent.change(getByTestId("inputName"), {
			target: { value: "testname" }
		});

		fireEvent.change(getByTestId("inputSurname"), {
			target: { value: "testsurname" }
		});

		fireEvent.submit(getByText("Зарегистрироваться"));
	});
});