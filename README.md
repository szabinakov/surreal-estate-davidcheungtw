# Surreal Estate App

## Project Brief

This application uses to search property in external API.

The search result can be sorted and filtered by user.

User can add the result to their own property page.

User can view all property in property page.

## Screenshots of app

- desktop screen to show all images

  <img src="" height="200">

- desktop screen clicking one image

  <img src="" height="200">

- mobile screen to show images

  <img src="" height="200">

## Testing utilities used (Jest, React Testing Library)

| Utilities | From                     | Usage                                                          |
| --------- | ------------------------ | -------------------------------------------------------------- |
| renderer  | "react-test-renderer"    | to generate component snapshots to catch unanticipated changes |
| render    | "@testing-library/react" | to create the virtual test environment                         |
| fireEvent | "@testing-library/react" | to simulate event trigger on component                         |
| waitFor   | "@testing-library/react" | await for a group of actions                                   |
| spyOn     | "jest"                   | to mock response from axios API calls                          |

## Technologies

- [React](https://react.dev/learn): create a React app project template
- [Axios API](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser
- [Prop types](https://www.npmjs.com/package/prop-types): runtime type checking for React props and similar objects

## Instructions

- Clone the repo:

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

- To run the tests:

```
npm test
```

## Extra features

-

## Author

[David Cheung](https://www.linkedin.com/in/david-cheung-473597199/)
