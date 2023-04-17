import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import axios from "axios";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it("Renders success post request to Surreal Estate API", async () => {
    jest.spyOn(axios, "post").mockReturnValueOnce(Promise.resolve());
    render(<AddProperty />);

    const textboxs = screen.getAllByRole("textbox");
    const comboboxs = screen.getAllByRole("combobox");
    const spinbutton = screen.getAllByRole("spinbutton");
    const button = screen.getByRole("button");

    fireEvent.change(textboxs[0], { target: { value: "2 bed flat" } });
    fireEvent.change(textboxs[1], {
      target: { value: "john.smith@email.co.uk" },
    });
    fireEvent.change(comboboxs[0], { target: { value: "Flat" } });
    fireEvent.change(comboboxs[1], { target: { value: "Manchester" } });
    fireEvent.change(spinbutton[0], { target: { value: 2 } });
    fireEvent.change(spinbutton[1], { target: { value: 2 } });
    fireEvent.change(spinbutton[2], { target: { value: 1230 } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Property added.")).toBeInTheDocument();
    });
  });

  it("Renders fail post request to Surreal Estate API", async () => {
    jest.spyOn(axios, "post").mockReturnValueOnce(Promise.reject());
    render(<AddProperty />);

    const textboxs = screen.getAllByRole("textbox");
    const comboboxs = screen.getAllByRole("combobox");
    const spinbutton = screen.getAllByRole("spinbutton");
    const button = screen.getByRole("button");

    fireEvent.change(textboxs[0], { target: { value: "2 bed flat" } });
    fireEvent.change(textboxs[1], {
      target: { value: "john.smith@email.co.uk" },
    });
    fireEvent.change(comboboxs[0], { target: { value: "Flat" } });
    fireEvent.change(comboboxs[1], { target: { value: "Manchester" } });
    fireEvent.change(spinbutton[0], { target: { value: 2 } });
    fireEvent.change(spinbutton[1], { target: { value: 2 } });
    fireEvent.change(spinbutton[2], { target: { value: 1230 } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Server error. Please try again later.")
      ).toBeInTheDocument();
    });
  });
});
