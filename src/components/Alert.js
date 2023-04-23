import React from "react";
import "../styles/alert.css";

const Alert = ({ message, isSuccess }) => {
  if (!message) return null;
  return (
    <div
      className={`${isSuccess ? "alert alert-success" : "alert alert-fail"}`}
    >
      {message}
    </div>
  );
};

export default Alert;
