import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Alert from "../components/Alert";

describe("Alert", () => {
  const validProps1 = {
    message: "Error!",
    isSuccess: false,
  };
  const validProps2 = {
    message: "Success!!!",
    isSuccess: true,
  };

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Renders with error message as expected", () => {
    const { asFragment } = render(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Assert error message is present", () => {
    render(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(screen.getByText(/Error!/i)).toBeTruthy();
    expect(screen.getByText(/Error!/i)).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText(/Error!/i)).toHaveClass("alert-fail");
  });

  it("Renders with success message as expected", () => {
    const { asFragment } = render(
      <Alert message={validProps2.message} isSuccess={validProps2.isSuccess} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Assert success message is present", () => {
    render(
      <Alert message={validProps2.message} isSuccess={validProps2.isSuccess} />
    );

    expect(screen.getByText(/Success!!!/i)).toBeTruthy();
    expect(screen.getByText(/Success!!!/i)).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText(/Success!!!/i)).toHaveClass("alert-success");
  });
});
