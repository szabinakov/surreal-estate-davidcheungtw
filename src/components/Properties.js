import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import getProperty from "../requests/getProperty";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperty(setProperties, setAlert);
  }, []);

  return (
    <div className="properties">
      <h3>Properties Page</h3>
      {alert.message && <Alert message={alert.message} isSuccess={false} />}
      {!alert.message && properties.length > 0 && (
        <>
          {properties.map((property) => (
            <div key={property._id} className="item">
              <PropertyCard key={property._id} {...property} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Properties;
