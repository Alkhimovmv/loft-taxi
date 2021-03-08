import React from "react";
import { Signup } from "./Signup";
import { render } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";

describe("Signup", () => {
    it("renders form", () => {
        const { getByLabelText } = render(
        <BrowserRouter>
             <Signup />
        </BrowserRouter>
       );
        expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
        expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
        expect(getByLabelText("Name:")).toHaveAttribute("name", "name");
        expect(getByLabelText("Surname:")).toHaveAttribute("name", "surname");
    });
});