import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Properties from "../components/Properties";

describe("Properties", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(<Properties />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert Properties Page Heading", () => {
    render(<Properties />);

    expect(screen.getByText(/Properties Page/i)).toBeTruthy();
    expect(screen.getByText(/Properties Page/i)).toBeInstanceOf(
      HTMLHeadingElement
    );
  });
});
