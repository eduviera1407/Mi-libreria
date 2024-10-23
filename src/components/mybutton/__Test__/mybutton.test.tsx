import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Mybutton from "../mybutton";
describe("CustomButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 render(<Mybutton text='Hola' txtcolor='white' bgcolor='orange' />);
 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});