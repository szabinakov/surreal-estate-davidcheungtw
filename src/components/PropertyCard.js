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
  removeProperty,
  removeId,
}) => {
  const handleSave = () => {
    onSaveProperty(_id);
  };

  const handleRemove = () => {
    removeProperty(removeId);
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
        {userID && onSaveProperty && (
          <button type="submit" className="button-save" onClick={handleSave}>
            Save
          </button>
        )}
        {userID && removeProperty && (
          <button
            type="submit"
            className="button-remove"
            onClick={handleRemove}
          >
            Remove
          </button>
        )}
      </ul>
    </div>
  );
};

export default PropertyCard;
