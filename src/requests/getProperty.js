import axios from "axios";

const getProperty = (setProperties, setAlert) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing";

  return axios
    .get(endpoint)
    .then((response) => {
      setProperties(response.data);
      setAlert({ message: "" });
    })
    .catch(() => {
      setProperties([]);
      setAlert({ message: "Property Listings error, please try again!" });
    });
};

export default getProperty;
