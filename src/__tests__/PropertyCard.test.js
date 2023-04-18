import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    property: {
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
  };

  it("Renders as expected", () => {
    const rendered = renderer.create(
      <PropertyCard key={validProps._id} {...validProps.property} />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Assert one property present", () => {
    const { container } = render(
      <PropertyCard key={validProps._id} {...validProps.property} />
    );
    const liElements = container.querySelectorAll("li");

    expect(liElements).toHaveLength(6);
    expect(liElements[0]).toHaveTextContent("title001");
    expect(liElements[1]).toHaveTextContent("Flat - Manchester");
    expect(liElements[4]).toHaveTextContent("1,000.00");
    const emailElement = liElements[5].querySelector("a");
    expect(emailElement).toHaveAttribute("href", "mailto:joe@mcr.codes");
  });
});
