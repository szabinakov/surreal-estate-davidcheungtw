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
        <h4>Filter by City:</h4>
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
