import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("classVP");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setMenu("classVP");
        break;
      case "/add-property":
        setMenu("classAP");
        break;
      default:
        setMenu("");
    }
  }, [location]);

  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <NavBar menu={menu} />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
