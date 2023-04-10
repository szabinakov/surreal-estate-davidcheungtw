import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText(/Surreal Estate/i)).toBeTruthy();
});
