import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert View Properties", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText(/View Properties/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
  });

  test("Assert Add a Property", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText(/Add a Property/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
  });
});
