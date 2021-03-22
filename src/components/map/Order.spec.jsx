import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import Order from "./Order";
import rootReducer from "../../modules";
import { sendAuthSuccess } from "../../modules/authAndRegister";
import { fetchCardSuccess } from "../../modules/card";
import { fetchRouteSuccess } from "../../modules/route";

describe("Order", () => {
	describe("if payment method not saved", () => {
		it("renders correctly", () => {
			let store = createStore(rootReducer);
			let { getByText } = render(
                <MemoryRouter>
                    <Provider store={store}>		
                        <Order />
                    </Provider>
                </MemoryRouter>
            );
			store.dispatch(sendAuthSuccess());

			expect(getByText("Заполните данные банковской карты")).toBeTruthy();
			expect(getByText("Перейти в Профиль")).toBeTruthy();
		});
	});
	describe("if payment method saved", () => {
		it("renders correctly", () => {
			let store = createStore(rootReducer);
			let { getByText } = render(
                <MemoryRouter>
                    <Provider store={store}>		
                        <Order />
                    </Provider>
                </MemoryRouter>
            );
            store.dispatch(sendAuthSuccess());
			store.dispatch(fetchCardSuccess("payload"));

			expect(getByText("Откуда")).toBeTruthy();
			expect(getByText("Куда")).toBeTruthy();
		});
	});
	describe("if payment method saved and order is accepted", () => {
		it("renders correctly and on 'Сделать новый заказ' button click set orderIsAccepted = false", () => {
			let store = createStore(rootReducer);
			let { getByText } = render(
                <MemoryRouter>
                    <Provider store={store}>		
                        <Order />
                    </Provider>
                </MemoryRouter>
            );
			store.dispatch(sendAuthSuccess());
			store.dispatch(fetchCardSuccess("payload"));
			store.dispatch(fetchRouteSuccess());

			expect(getByText("Ваш заказ принят. Такси скоро приедет.")).toBeTruthy();
			expect(getByText("Сделать новый заказ")).toBeTruthy();

			fireEvent.click(getByText("Сделать новый заказ"));

			expect(getByText("Откуда")).toBeTruthy();
			expect(getByText("Куда")).toBeTruthy();
		});
	});
});