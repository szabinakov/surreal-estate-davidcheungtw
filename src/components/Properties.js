import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import getProperty from "../requests/getProperty";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    const query = search;
    getProperty(setProperties, setAlert, query);
  }, [search]);

  return (
    <div className="properties">
      {/* <h3>Properties Page</h3> */}
      <div className="column left">
        <SideBar />
      </div>
      <div className="column right">
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
    </div>
  );
};

export default Properties;
