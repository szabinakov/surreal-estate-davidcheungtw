import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Properties from "../components/Properties";

describe("Properties", () => {
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

  test("Renders as expected", () => {
    const rendered = renderer.create(<Properties />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert Properties Page Heading", () => {
    render(<Properties />);

    expect(screen.getByText(/Properties Page/i)).toBeTruthy();
    expect(screen.getByText(/Properties Page/i)).toBeInstanceOf(
      HTMLHeadingElement
    );
  });

  // it("Assert three properties present", () => {
  //   render(<PropertyCard property={validProps.property} />);
  //   const item = screen.getByTestId("property-one-card");
  //   const liElements = item.querySelectorAll("li");

  //   expect(liElements).toHaveLength(6);
  //   expect(liElements[0]).toHaveTextContent("title001");
  //   expect(liElements[1]).toHaveTextContent("Flat - Manchester");
  //   expect(liElements[4]).toHaveTextContent("1,000.00");
  //   const emailElement = liElements[5].querySelector("a");
  //   expect(emailElement).toHaveAttribute("href", "mailto:joe@mcr.codes");
  // });
});

// it("Assert 3 properties are present", () => {
//   render(<PropertyCard property={validProps.property} />);
//   const items = screen.getAllByTestId("property-one-card");

//   expect(items).toHaveLength(3);

//   let liElements;
//   let emailElement;

//   liElements = items[0].querySelectorAll("li");

//   expect(liElements).toHaveLength(6);
//   expect(liElements[0]).toHaveTextContent("title001");
//   expect(liElements[1]).toHaveTextContent("Flat - Manchester");
//   expect(liElements[4]).toHaveTextContent("1,000.00");
//   emailElement = liElements[5].querySelector("a");
//   expect(emailElement).toHaveAttribute("href", "mailto:joe@mcr.codes");

//   liElements = items[1].querySelectorAll("li");

//   expect(liElements).toHaveLength(6);
//   expect(liElements[0]).toHaveTextContent("title002");
//   expect(liElements[1]).toHaveTextContent("Semi-detached - Leeds");
//   expect(liElements[4]).toHaveTextContent("2,000.00");
//   emailElement = liElements[5].querySelector("a");
//   expect(emailElement).toHaveAttribute("href", "mailto:joe@mcr.codes");

//   liElements = items[2].querySelectorAll("li");

//   expect(liElements).toHaveLength(6);
//   expect(liElements[0]).toHaveTextContent("title003");
//   expect(liElements[1]).toHaveTextContent("Detached - Liverpool");
//   expect(liElements[4]).toHaveTextContent("3,000.00");
//   emailElement = liElements[5].querySelector("a");
//   expect(emailElement).toHaveAttribute("href", "mailto:joe@mcr.codes");
// });
