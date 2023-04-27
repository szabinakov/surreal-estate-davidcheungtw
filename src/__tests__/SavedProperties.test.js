import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import axios from "axios";
import SavedProperties from "../components/SavedProperties";

describe("SavedProperties", () => {
  const validProps = {
    userID: "111222333444",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <Router>
        <SavedProperties userID={validProps.userID} />
      </Router>
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Renders success post request to Surreal Estate API", async () => {
    const mAxiosResponse = {
      data: [
        {
          _id: "01010101",
          propertyListing: {
            _id: "643a793b396cf20f05fb487c",
            title: "title001",
            type: "Flat",
            bedrooms: "1",
            bathrooms: "1",
            price: "1000",
            city: "Manchester",
            email: "joe@mcr.codes",
            __v: 0,
          },
        },
        {
          _id: "02020202",
          propertyListing: {
            _id: "643a795a396cf24c7cfb487e",
            title: "title002",
            type: "Semi-detached",
            bedrooms: "2",
            bathrooms: "2",
            price: "2000",
            city: "Leeds",
            email: "joe@mcr.codes",
            __v: 0,
          },
        },
        {
          _id: "03030303",
          propertyListing: {
            _id: "643a79d1396cf25d8dfb4883",
            title: "title003",
            type: "Detached",
            bedrooms: "3",
            bathrooms: "3",
            price: "3000",
            city: "Liverpool",
            email: "joe@mcr.codes",
            __v: 0,
          },
        },
      ],
    };
    jest.spyOn(axios, "get").mockResolvedValue(mAxiosResponse);
    render(
      <Router>
        <SavedProperties userID={validProps.userID} />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText("Flat - Manchester")).toBeInTheDocument();
      expect(screen.getByText("Semi-detached - Leeds")).toBeInTheDocument();
      expect(screen.getByText("Detached - Liverpool")).toBeInTheDocument();
    });
  });
});
