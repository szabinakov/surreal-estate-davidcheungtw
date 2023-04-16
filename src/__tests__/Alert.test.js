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
  const validProps3 = {
    message: "",
    isSuccess: false,
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Renders as expected - error message", () => {
    const { getByText, asFragment } = render(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Assert error message", () => {
    render(
      <Alert message={validProps1.message} isSuccess={validProps1.isSuccess} />
    );

    expect(screen.getByText(/Error!/i)).toBeTruthy();
    expect(screen.getByText(/Error!/i)).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText(/Error!/i)).toHaveClass("alert-fail");
  });

  test("Renders as expected - success message", () => {
    const { getByText, asFragment } = render(
      <Alert message={validProps2.message} isSuccess={validProps2.isSuccess} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Assert success message", () => {
    render(
      <Alert message={validProps2.message} isSuccess={validProps2.isSuccess} />
    );

    expect(screen.getByText(/Success!!!/i)).toBeTruthy();
    expect(screen.getByText(/Success!!!/i)).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText(/Success!!!/i)).toHaveClass("alert-success");
  });

  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(
      <Alert message={validProps3.message} isSuccess={validProps3.isSuccess} />
    );
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
