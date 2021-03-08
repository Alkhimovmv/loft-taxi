import React from "react";
import { Profile } from "./Profile";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Profile", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
          <Profile />
      </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Профиль");
  });
});
