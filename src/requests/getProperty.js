import axios from "axios";

const getProperty = (setProperties, setAlert, query) => {
  let endpoint = "http://localhost:4000/api/v1/PropertyListing";

  if (query) {
    endpoint += query;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setProperties(response.data);
      if (response.data.length === 0) {
        setAlert({ message: "No property in this city, please try again!" });
      } else {
        setAlert({ message: "" });
      }
    })
    .catch(() => {
      setProperties([]);
      setAlert({ message: "Property Listings error, please try again!" });
    });
};

export default getProperty;
