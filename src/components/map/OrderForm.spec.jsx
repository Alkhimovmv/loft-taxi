import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import rootReducer from "../../modules";
import OrderForm from "./OrderForm";

describe("OrderForm", () => {
	it("renders correctly", () => {
		let store = createStore(rootReducer);
		let { getByTestId, getByText } = render(
            <MemoryRouter>
                <Provider store={store}>		
                    <OrderForm />
                </Provider>
            </MemoryRouter>
        );

		expect(getByTestId("from")).toBeTruthy();
		expect(getByTestId("to")).toBeTruthy();
		expect(getByText("Вызвать такси")).toBeTruthy();
		fireEvent.submit(getByText("Вызвать такси"));
	});
});
