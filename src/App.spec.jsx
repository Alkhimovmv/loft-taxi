import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { App } from "./App";
import { sendAuthSuccess } from "./modules/authAndRegister";

describe("App", () => {
	it("renders profile page on Профиль button click in header", () => {
		let store = createStore(rootReducer);
		let { getByText, getByTestId } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<App />;
				</Provider>
			</MemoryRouter>
		);
		store.dispatch(sendAuthSuccess());

		fireEvent.click(getByText("Профиль"));

		expect(getByTestId("profile")).toBeTruthy();
	});

	it("renders map page on Карта button click in header", () => {
		let store = createStore(rootReducer);
		let { getByText, getByTestId } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<App />;
				</Provider>
			</MemoryRouter>
		);
		store.dispatch(sendAuthSuccess());

		fireEvent.click(getByText("Карта"));

		expect(getByTestId("map")).toBeTruthy();
	});

	it("renders login page on Выйти button click in header", () => {
		let store = createStore(rootReducer);
		let { getByText, getByTestId } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<App />;
				</Provider>
			</MemoryRouter>
		);
		store.dispatch(sendAuthSuccess());

		fireEvent.click(getByText("Выйти"));

		expect(getByTestId("login")).toBeTruthy();
	});

	it("toggle login and signup pages on Войти and Зарегистрируйтесь link click", () => {
		let store = createStore(rootReducer);
		let { getByText, getByTestId } = render(
			<MemoryRouter>
				<Provider store={store}>		
					<App />;
				</Provider>
			</MemoryRouter>
		);

		fireEvent.click(getByText("Зарегистрируйтесь"));
		expect(getByTestId("signup")).toBeTruthy();

		fireEvent.click(getByText("Войти"));
		expect(getByTestId("login")).toBeTruthy();
	});
});