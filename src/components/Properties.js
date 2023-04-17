import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import getProperty from "../requests/getProperty";
import "../styles/properties.css";

const Properties = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProperty(setItems);
  }, []);

  return (
    <div className="properties">
      <h3>Properties Page</h3>
      {items.length > 0 && <PropertyCard properties={items} />}
    </div>
  );
};

export default Properties;
