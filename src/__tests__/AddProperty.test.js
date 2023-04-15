import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(<AddProperty />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert 7 inputs are present", () => {
    render(<AddProperty />);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3);
  });

  test("Assert 1 button is present", () => {
    render(<AddProperty />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Add");
  });
});
