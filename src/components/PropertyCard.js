import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBath, FaBed } from "react-icons/fa";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SlEnvolope } from "react-icons/sl";
import PropTypes from "prop-types";
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
        {!removeId && (
          <button type="submit" className="button-save" onClick={handleSave}>
            Save
          </button>
        )}
        {removeId && (
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

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  removeProperty: PropTypes.func.isRequired,
  removeId: PropTypes.string.isRequired,
};
