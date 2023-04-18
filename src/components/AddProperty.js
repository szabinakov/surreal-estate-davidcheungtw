import React, { useState } from "react";
import Alert from "./Alert";
// eslint-disable-next-line import/order
import axios from "axios";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = async (event) => {
    event.preventDefault();
    const { title, city, type, bedrooms, bathrooms, price, email } = fields;

    setAlert({
      message: "",
      isSuccess: false,
    });

    if (
      title &&
      city &&
      type &&
      bedrooms > 0 &&
      bathrooms > 0 &&
      price > 0 &&
      email
    ) {
      axios
        .post("http://localhost:4000/api/v1/PropertyListing", fields)
        .then(() => {
          setAlert({
            message: "Property added.",
            isSuccess: true,
          });
        })
        .catch(() => {
          setAlert({
            message: "Server error. Please try again later.",
            isSuccess: false,
          });
        });

      return;
    }
    setAlert({
      message: "Please enter missing information!",
      isSuccess: false,
    });
  };

  return (
    <div className="add-property">
      <h3>Add a Property</h3>

      <form className="add-property-form" onSubmit={handleAddProperty}>
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
        <label htmlFor="title">
          Property Description
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="2 bed flat"
          />
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="0"
            step="1"
            min="0"
            max="9"
          />
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="0"
            step="1"
            min="0"
            max="9"
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="0"
            step="100"
            min="0"
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="john.smith@email.co.uk"
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
