import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  xit("Renders as expected", () => {
    const rendered = renderer.create(
      <Router>
        <App />
      </Router>
    );

    expect(rendered).toMatchSnapshot();
  });

  xit("renders learn react link", () => {
    render(<App />);

    expect(screen.getByText("Surreal Estate")).toBeTruthy();
    // expect(screen.getByText("Surreal Estate")).toBeInstanceOf(
    //   HTMLParagraphElement
    // );
  });
});
