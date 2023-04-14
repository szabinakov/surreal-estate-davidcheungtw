import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
