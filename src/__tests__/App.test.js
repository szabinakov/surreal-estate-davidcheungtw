import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  const fbScript = document.createElement("script");
  fbScript.id = "facebook-jssdk";
  document.body.appendChild(fbScript);

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <Router>
        <App />
      </Router>
    );

    expect(rendered).toMatchSnapshot();
  });
});
