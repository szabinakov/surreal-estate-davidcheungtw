import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";

const NavBar = ({ menu }) => {
  let classVP;
  let classAP;

  if (menu === "classVP") {
    classVP = `navbar-links-item ${menu}`;
    classAP = "navbar-links-item";
  } else {
    classVP = "navbar-links-item";
    classAP = `navbar-links-item ${menu}`;
  }

  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <ul className="navbar-links">
        <li className={classVP}>
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className={classAP}>
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
