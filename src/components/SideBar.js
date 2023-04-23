/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { SlMagnifier } from "react-icons/sl";
import "../styles/side-bar.css";

const SideBar = () => {
  const { search } = useLocation();
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const buildQueryString = (operation, valueObj) => {
    const currentQuery = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const newQuery = {
      ...currentQuery,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQuery[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQuery, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = buildQueryString("query", {
      title: { $regex: searchText },
    });
    navigate(searchQuery);
  };

  return (
    <div className="side-bar">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          id="searchText"
          name="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">
          <SlMagnifier />
        </button>
      </form>
      <ul className="side-bar-links">
        <h5>Filter by City:</h5>

        <div className="cityGroup">
          {cities.map((city) => (
            <li key={city} className="side-bar-links-item">
              <Link className="item" to={buildQueryString("query", { city })}>
                {city}
              </Link>
            </li>
          ))}
        </div>

        <h5>Sort by:</h5>
        <div className="sortGroup">
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
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
