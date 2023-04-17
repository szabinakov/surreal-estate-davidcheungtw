import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    properties: [
      {
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
      {
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
      {
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
    ],
  };

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <PropertyCard properties={validProps.properties} />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Assert 3 properties are present", () => {
    render(<PropertyCard properties={validProps.properties} />);
    const items = screen.getAllByTestId("property-one-card");

    expect(items).toHaveLength(3);
  });
});
