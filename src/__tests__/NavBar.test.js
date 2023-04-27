import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
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

  it("Assert all menu bar selections", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const img = screen.getByRole("img");

    expect(img).toBeInstanceOf(HTMLImageElement);
    expect(screen.getByText(/View Properties/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
    expect(screen.getByText(/Add a Property/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
    expect(screen.getByText(/Saved Properties/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
    expect(screen.getByText(/Login/i)).toBeInstanceOf(HTMLButtonElement);
  });
});
