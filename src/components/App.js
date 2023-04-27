import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import SavedProperties from "./SavedProperties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("classVP");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setMenu("classVP");
        break;
      case "/add-property":
        setMenu("classAP");
        break;
      case "/saved-properties":
        setMenu("classSP");
        break;
      default:
        setMenu("");
    }
  }, [location]);

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const logoutCallback = () => {
    setUserID("");
  };

  const handleLogout = () => {
    window.FB.logout(logoutCallback);
  };

  return (
    <div className="App">
      <NavBar
        menu={menu}
        userID={userID}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route
          path="saved-properties"
          element={<SavedProperties userID={userID} />}
        />
      </Routes>
    </div>
  );
};

export default App;
