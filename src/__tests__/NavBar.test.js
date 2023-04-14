import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  xit("Renders as expected", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(rendered).toMatchSnapshot();
  });

  xit("renders learn react link", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );

    // expect(screen.getByText("View Properties")).toBeTruthy();
    // expect(screen.getByText("View Properties")).toBeInstanceOf(
    //   HTMLParagraphElement
    // );
    // expect(screen.getByText("Add a Property")).toBeTruthy();
    // expect(screen.getByText("Add a Property")).toBeInstanceOf(
    //   HTMLParagraphElement
    // );
  });
});
