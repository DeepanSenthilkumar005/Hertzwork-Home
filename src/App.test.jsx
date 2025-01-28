import { render, screen } from "@testing-library/react";
import NavBar from "./components/NavBar";
import '@testing-library/jest-dom';
import React from "react";

test("renders navigation menu items", () => {
  render(<NavBar />);
  
  const menuItems = ["Home", "Services", "Products", "Career", "Contact Us"];
  
  menuItems.forEach((item) => {
    const menuItem = screen.getByText(item);
    expect(menuItem).toBeInTheDocument();
  });
});
