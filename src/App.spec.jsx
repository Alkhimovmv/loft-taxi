import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';

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
      <MemoryRouter>
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      </MemoryRouter>
    );
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: ()=> {},
    };

    it("open login page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Login content");
    });

    it("open map page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <MemoryRouter>
          <Router history={history}>
            <Provider store={mockStore}>
              <App />
            </Provider>
          </Router>
        </MemoryRouter>
      );
      fireEvent.click(getByText('Карта'));
      expect(container.innerHTML).toMatch("Map content");
    });

    it("open profile page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <MemoryRouter>
          <Router history={history}>
            <Provider store={mockStore}>
              <App />
            </Provider>
          </Router>
        </MemoryRouter>
      );
      fireEvent.click(getByText('Профиль'));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});