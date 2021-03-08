import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";

describe("Login", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      expect(getByLabelText("Email")).toHaveAttribute("name", "email");
      expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
    });

  })
  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Login isLoggedIn />
        </BrowserRouter>
      );
      expect(getByText("Войти в профиль")).toBeInTheDocument()
    });
  });
});
