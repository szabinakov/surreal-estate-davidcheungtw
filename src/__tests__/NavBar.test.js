import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  // to solve facebook-login problem
  const fbScript = document.createElement("script");
  fbScript.id = "facebook-jssdk";
  document.body.appendChild(fbScript);

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Assert View Properties", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText(/View Properties/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
  });

  it("Assert Add a Property", () => {
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
