import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("Renders as expected", () => {
    const rendered = renderer.create(<AddProperty />);

    expect(rendered).toMatchSnapshot();
  });
});
