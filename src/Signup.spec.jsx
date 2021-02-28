import React from "react";
import { Signup } from "./Signup";
import { render } from "@testing-library/react";

describe("Signup", () => {
    it("renders form", () => {
        const { getByLabelText } = render(<Signup />);
        expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
        expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
        expect(getByLabelText("Name:")).toHaveAttribute("name", "name");
        expect(getByLabelText("Surname:")).toHaveAttribute("name", "surname");
    });
});