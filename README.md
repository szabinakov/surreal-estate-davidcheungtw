# Surreal Estate App

## Project Brief

This is frontend application for backend Surreal-Estate-API.

Landlords or estate agency can add their properties to sell.

Visitors can search their favourite properties by title or city with sorting price function.

Visitors can login with facebook account and save their favourite properties. Therefore, they can further view or remove them.

## Screenshots of app

- screenshots without property

  <img src="screenshots\no-property-page-1.jpeg" height="200">
  <img src="screenshots\no-property-page-2.jpeg" height="200">
  <img src="screenshots\no-property-page-3.jpeg" height="200">

- screenshots add property success or failure

  <img src="screenshots\add-property-success.jpeg" height="200">
  <img src="screenshots\add-property-fail.jpeg" height="200">

- screenshots view property with searching title or city and with sorting function

  <img src="screenshots\view-all-properties.jpeg" height="200">
  <img src="screenshots\view-by-city-with-sort.jpeg" height="200">
  <img src="screenshots\view-with-title-search.jpeg" height="200">

- screenshots after facebook login

  <img src="screenshots\login-page-1.jpeg" height="200">
  <img src="screenshots\login-page-3.jpeg" height="200">

- screenshots save, view and remove saved properties

  <img src="screenshots\save-property-success.jpeg" height="200">
  <img src="screenshots\view-saved-property.jpeg" height="200">
  <img src="screenshots\remove-saved-property-success.jpeg" height="200">

## Testing utilities used (Jest, React Testing Library)

| Utilities     | From                     | Usage                                                                   |
| ------------- | ------------------------ | ----------------------------------------------------------------------- |
| renderer      | "react-test-renderer"    | to generate component snapshots to catch unanticipated changes          |
| render        | "@testing-library/react" | to create the virtual test environment                                  |
| fireEvent     | "@testing-library/react" | to simulate event trigger on component                                  |
| waitFor       | "@testing-library/react" | await for a group of actions                                            |
| spyOn         | "jest"                   | to mock response from axios API calls                                   |
| BrowserRouter | "react-router-dom"       | to store current location in the browser's address bar using clean URLs |
| MemoryRouter  | "react-router-dom"       | to store locations internally in an array                               |

## Technologies

- [React](https://react.dev/learn): create a React app project template
- [Link,useLocation,useNavigate](https://reactrouter.com/en/v6.3.0/api): React router and Link function
- [React Icon](https://react-icons.github.io/react-icons): provide popular icons in React projects
- [Axios API](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser
- [Facebook login](https://github.com/keppelen/react-facebook-login): allow visitors to use their Facebook profile to log into your website instead of creating a unique sign-in
- [qs](https://www.npmjs.com/package/qs): A querystring parsing and stringifying library
- [Prop types](https://www.npmjs.com/package/prop-types): runtime type checking for React props and similar objects

## Instructions

There are backend and frontend apps to be setup. Please note.

- Clone backend repo surreal-estate-api:

  ```
  git clone https://github.com/CommandShiftHQ/surreal-estate-api.git
  ```

- For Macbook M1, please further pull branch 'mac_M1'.

  ```
  git branch mac_M1
  git checkout mac_M1
  git pull origin mac_M1
  ```

- Install docker, please refer https://docs.docker.com/desktop/install/mac-install/

- To start and run on port 4000:

  ```
  docker run --name test_mongo -d -p 27017:27017 mongo:4.4.14
  docker inspect -f '{{.NetworkSettings.IPAddress}}' test_mongo
  ```

  then create .env file in surreal estate api at root level with DATABASE_CONN=mongodb://{{whatever the result of the ip inspect was here}}:27017/surreal-estate

  ```
  docker build -t surreal_estate_test .
  docker run --name surreal_api_test -d -p 4000:3000 surreal_estate_test
  ```

  <img src="screenshots\docker.jpeg" height="200">

  then visit API document http://localhost:4000/api-docs

  <img src="screenshots\api-document.jpeg" height="200">

  and then test request by postman http://localhost:4000/api/v1/PropertyListing

  <img src="screenshots\postman.jpeg" height="200">

- Clone frontend repo surreal-estate:

  ```
  git clone https://github.com/DavidCheungTW/surreal-estate.git
  ```

- Move into the directory and install:

  ```
  cd surreal-estate
  npm install
  ```

- To start and run on port 3000:

  ```
  npm start
  ```

  Remark: If warning "Your connection is not private" is shown, please continue to processd to localhost(unsafe).

- To run the tests:

  ```
  npm test
  ```

## Problem and solution

If 'npm install' surreal-estate app occurs error, please try:

- edit package.json to remove "react-facebook-login"
- delete package-lock.json file
- delete node_modules folder
- run:

```
npm i
npm install react-facebook-login --force
npm start
```

## Author

[David Cheung](https://www.linkedin.com/in/david-cheung-473597199/)
