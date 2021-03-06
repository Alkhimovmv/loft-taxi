import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

jest.mock("./Login", () => ({ LoginWithAuth: () => <div>Login content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true}}),
      subscribe: () => {},
      dispatch: ()=> {}
    };

    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore = {
        getState: () => ({ auth: { isLoggedIn: true } }),
        subscribe: () => {},
        dispatch: ()=> {},
      };
  
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Login content");
      fireEvent.click(getByText('Карта'));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText('Профиль'));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});
