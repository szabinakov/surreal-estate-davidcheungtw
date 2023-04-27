import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("Renders as expected", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Assert all side bar selections", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(screen.getByText(/Filter by City:/i)).toBeInstanceOf(
      HTMLHeadingElement
    );
    expect(screen.getByText(/Manchester/i)).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByText(/Leeds/i)).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByText(/Sheffield/i)).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByText(/Liverpool/i)).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByText(/Sort by:/i)).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByText(/Price Ascending/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
    expect(screen.getByText(/Price Descending/i)).toBeInstanceOf(
      HTMLAnchorElement
    );
    expect(screen.getByRole("textbox")).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole("button")).toBeInstanceOf(HTMLButtonElement);
  });
});
