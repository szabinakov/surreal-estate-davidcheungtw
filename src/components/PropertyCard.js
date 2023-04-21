import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBath, FaBed } from "react-icons/fa";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SlEnvolope } from "react-icons/sl";
import "../styles/property-card.css";

const PropertyCard = ({
  _id,
  title,
  bathrooms,
  bedrooms,
  price,
  type,
  email,
  city,
  userID,
  onSaveProperty,
}) => {
  const handleClick = () => {
    onSaveProperty(_id);
  };

  return (
    <div className="property-card">
      <ul>
        <li>{title}</li>
        <li className="property-card-type">
          {type} - {city}
        </li>
        <li>
          <FaBath />
          {bathrooms}
        </li>
        <li>
          <FaBed />
          {bedrooms}
        </li>
        <li>
          £
          {Number(price).toLocaleString("en-gb", {
            minimumFractionDigits: 2,
          })}
        </li>
        <li className="property-card-email">
          <a href={`mailto:${email}`}>
            <SlEnvolope /> Email
          </a>
        </li>
        {userID && (
          <button type="submit" className="button-save" onClick={handleClick}>
            Save
          </button>
        )}
      </ul>
    </div>
  );
};

export default PropertyCard;
