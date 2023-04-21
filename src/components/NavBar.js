import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import logo from "../images/logo.png";
import "../styles/navbar.css";

const NavBar = ({ menu, userID, onLogin, onLogout }) => {
  let classVP = "navbar-links-item";
  let classAP = "navbar-links-item";
  let classSP = "navbar-links-item";

  switch (menu) {
    case "classVP":
      classVP = `navbar-links-item ${menu}`;
      break;
    case "classAP":
      classAP = `navbar-links-item ${menu}`;
      break;
    default:
      classSP = `navbar-links-item ${menu}`;
  }

  return (
    <div className="navbar">
      <ul className="navbar-links">
        <img src={logo} className="navbar-logo" alt="logo" />
        <li className={classVP}>
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className={classSP}>
          <Link className="item" to="saved-properties">
            Saved Properties
          </Link>
        </li>
        <li className={classAP}>
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>

      <div className="facebook-login">
        {userID ? (
          <button type="submit" className="button-sign-out" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <FacebookLogin
            appId="613942867273925"
            callback={onLogin}
            icon="fa-facebook"
            textButton="   Login"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
