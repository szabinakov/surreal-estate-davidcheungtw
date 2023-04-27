import axios from "axios";

const getSavedProperties = (setProperties, setAlert) => {
  const endpoint =
    "http://localhost:4000/api/v1/Favourite?populate=propertyListing";

  return axios
    .get(endpoint)
    .then((response) => {
      setProperties(response.data);
      if (response.data.length === 0) {
        setAlert({ message: "No saved property!" });
      } else {
        setAlert({ message: "" });
      }
    })
    .catch(() => {
      setProperties([]);
      setAlert({
        message: "Get saved properties error, please try again later!",
      });
    });
};

export default getSavedProperties;
