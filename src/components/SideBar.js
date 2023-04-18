import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul className="side-bar-links">
        <li className="side-bar-links-item">
          <Link className="item" to="/">
            All
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link className="item" to={`/?query={"city": "Manchester"}`}>
            Manchester
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link className="item" to={`/?query={"city": "Leeds"}`}>
            Leeds
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link className="item" to={`/?query={"city": "Sheffield"}`}>
            Sheffield
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link className="item" to={`/?query={"city": "Liverpool"}`}>
            Liverpool
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
