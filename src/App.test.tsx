import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// ..........

// ............

test("check Title", () => {
  render(<App />);

  const id1 = screen.getByTestId("1");
  expect(id1).toHaveTextContent("My-Task");
  
});

test("checks for placeholder", () => {
  render(<App />);

  const id2 = screen.getByPlaceholderText("Enter a task");
  expect(id2);
});
test("checks for Button ", () => {
  render(<App />);

  const id3 = screen.getByTestId("3");
  expect(id3).toHaveTextContent("GO");
});
