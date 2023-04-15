import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Router>
        <App />
      </Router>
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert Surreal Estate Heading", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    expect(screen.getByText(/Surreal Estate/i)).toBeTruthy();
    expect(screen.getByText(/Surreal Estate/i)).toBeInstanceOf(
      HTMLHeadingElement
    );
  });
});
