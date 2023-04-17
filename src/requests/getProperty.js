import axios from "axios";

const getProperty = (setProperties) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing";

  return axios
    .get(endpoint)
    .then((response) => {
      setProperties(response.data);
    })
    .catch((error) => {
      setProperties([]);
      console.log(error);
    });
};

export default getProperty;
