import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import PropTypes from "prop-types";
import getSavedProperties from "../requests/getSavedProperties";
import "../styles/saved-properties.css";

const SavedProperties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    getSavedProperties(setProperties, setAlert);
  }, []);

  const removeProperty = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${id}`)
      .then(() => {
        setAlert({
          message: "Saved property removed.",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  if (!userID) {
    return <div className="saved-properties">Please login first</div>;
  }

  return (
    <div className="saved-properties">
      {alert.message && (
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
      )}
      <h5> User ID : {userID}</h5>
      {!alert.message && (
        <div className="property-card-list">
          {properties.map((property) => (
            <div key={property._id} className="item">
              <PropertyCard
                key={property._id}
                {...property.propertyListing}
                userID={userID}
                onSaveProperty={() => {}}
                removeProperty={removeProperty}
                removeId={property._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedProperties;

SavedProperties.propTypes = {
  userID: PropTypes.string.isRequired,
};
