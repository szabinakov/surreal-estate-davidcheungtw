// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const postProperty = (fields) => {
  const url = "http://localhost:4000/api/v1/PropertyListing";

  return axios.post(url, fields);
  // .then((response) => {
  //   return `Message: ${response.statusText}`;
  // })
  // .catch((err) => {
  //   return `Message: ${err.message}`;
  // });
};

export default postProperty;
