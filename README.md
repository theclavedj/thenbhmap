# Neighbourhood Map

Project 8 Front End Nanodegree Udacity: Coffee Time

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project also uses:
* [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
* Markers information are from [Foursquare API](https://developer.foursquare.com/places-api)

* [Workbox for offline usage](https://developers.google.com/web/tools/workbox/)

## Project Overview

As part of the Front End Web Developer scholarship granted by Google and Udacity, for the last project I had to build from scratch an app using REACT. The app will show a google map with map markers to identify locations around the neighborhood you base it on.  This project is based on coffee places around Bucharest, Romania, and the information is obtain through 3d-party API call (Foursquare).

The user of the app will be able to view a set of locations that provide name and address of selected coffee place.

The app must be responsive and be accessible. The use of a service worker to allow for offline usage.

## How To Run This App

**Dependencies**

 * npm

1. Download or Clone this Repository.
2. Run $ npm install to install the project dependencies.
3. Run the app using $ npm start.
4. App can be seen at: localhost:3000 which should open automatically.

**Service Worker**

The service worker is only implemented during production build and was used Google Workbox to preload and precache the app! To run production build:

1. Download or Clone this Repository.
2. Run $ npm install to install the project dependencies.
3. $ npm run build.
4. $ npm run serve
4. Localhost:5000

## Requirements

**Meets Specifications**

### Interface Design

**Responsiveness**

- All application components render on-screen in a responsive manner.

**Usability**

- All application components are usable across modern desktop, tablet, and phone browsers.

### Application Functionality

**Location Filter**

- Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

**List View**

- A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.

- Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)

- List functionality is responsive and runs error free.

**Map and Markers**

- Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.

- Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).

- Any additional custom functionality provided in the app functions error-free.

### Asynchronous Data Usage

**Asynchronous API Requests**

- Application utilizes the `Google Maps API` or another mapping system and at least one non-Google third-party `API`. Refer to this documentation(https://developers.google.com/maps/documentation/javascript/tutorial)

- All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest.

**Error Handling**

- Data requests that fail are handled gracefully using common fallback techniques (i.e. `AJAX` error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an `API` doesn’t load there should be some visible indication on the page that it didn’t load.

### Documentation

**README**

- A `README` file is included detailing all steps required to successfully run the application.

**Comments**

- Comments are present and effectively explain longer code procedures.

### Location Details Functionality

**Additional Location Data**

- Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can id provided in the marker’s `infoWindow`.

- Provide attribution for the source of additional data.

**Error Free**

- Application runs without console errors.

**Usability**

- Functionality is presented in a usable and responsive manner.

### Accessibility

**Focus**

- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

**Site elements are defined semantically**

- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate `ARIA roles` are defined.

**Accessible Images**

- All content-related images include appropriate alternate text that clearly describes the content of the image.

### Offline Use

**Service Worker**

- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

### Application Architecture

**Proper Use of React**

- React code follows a reasonable component structure.

- State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate.

- There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.

### License

This is my project for Udacity project and has a [MIT License](https://opensource.org/licenses/MIT).

## Inspiration

	* This project could be possible thanks to Udacity and Google, if you are interested, check: https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001

<<<<<<< HEAD
* Inserting scripts in React: https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

* Google Maps with React: https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
=======
  * Inserting scripts in React:https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
>>>>>>> production-build

* React with Google Maps: https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

<<<<<<< HEAD
=======
* React with Google Maps: https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

>>>>>>> production-build
* Deploying for user page using react: https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka

* Workbox for custom PWA: https://medium.freecodecamp.org/how-to-build-a-custom-pwa-with-workbox-in-create-react-app-be580686cf73

* Implementing Workbox on react: https://github.com/facebook/create-react-app/issues/5673

* Working with service worker on react: https://scotch.io/tutorials/how-to-make-your-existing-react-app-progressive-in-10-minutes

* From website to PWA with Workbox, Google Developer India: https://www.youtube.com/watch?v=POS9HWcvuCU

* React async script loader: https://www.npmjs.com/package/react-async-script-loader
