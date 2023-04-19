/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const { search } = useLocation();
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

  const buildQueryString = (operation, valueObj) => {
    const currentQuery = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const newQuery = {
      ...currentQuery,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQuery, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
      <ul className="side-bar-links">
        <h4>Filter by City:</h4>
        <li className="side-bar-links-item">
          <Link className="item" to="/">
            All
          </Link>
        </li>
        {cities.map((city) => (
          <li key={city} className="side-bar-links-item">
            <Link className="item" to={buildQueryString("query", { city })}>
              {city}
            </Link>
          </li>
        ))}
        <h4>Sort by:</h4>
        <li className="side-bar-links-item">
          <Link className="item" to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link className="item" to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
