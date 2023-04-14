import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("Renders as expected", () => {
    const rendered = renderer.create(<Properties />);

    expect(rendered).toMatchSnapshot();
  });
});
