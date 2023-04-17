import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import "../styles/property-card.css";

const PropertyCard = ({ properties }) => {
  return (
    <div className="property-card">
      {properties.map((property) => (
        <ul key={property._id} data-testid="property-one-card">
          <li>{property.title}</li>
          <li className="property-card-type">
            {property.type} - {property.city}
          </li>
          <li>
            <FaBath />
            {property.bathrooms}
          </li>
          <li>
            <FaBed />
            {property.bedrooms}
          </li>
          <li>
            £{" "}
            {Number(property.price).toLocaleString("en-gb", {
              minimumFractionDigits: 2,
            })}{" "}
          </li>
          <li className="property-card-email">
            <a href={`mailto:${property.email}`}>
              {" "}
              <SlEnvolope /> Email
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default PropertyCard;
