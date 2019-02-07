import React, { Component } from "react";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  constructor() {
    super();
    //state of component which will receive info from foursquare api
    this.state = {
      venues: [] //empty array which will be filled once the function getinfo loads the information from foursquare api async request
    };
  }

  componentDidMount() {
    //when the componentDidMount starts the loadmap function should be loaded and should call getinfo function to load foursquare api
    this.getInfo();
    //console.log(this.getInfo);
  }

  loadMap = () => {
    window.initMap = this.initMap;
    loadMapsAPI(
      "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCaOk9oP1NSXBtSPcrgHAO2fL3gu_UQzWs&v=3&callback=initMap"
    );
    //console.log(window.initMap)
  };
  //https://developer.foursquare.com/docs/api
  //create venue app using react with foursquare api http://stevebrown.co/journal/creating-a-local-venue-app-using-reactredux-with-the-foursquare-api-part-i
  // react docs, ajax and apis https://reactjs.org/docs/faq-ajax.html
  getInfo() {
    let setVenueState = this.setState.bind(this);

    const venuesAPI = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P",
      client_secret: "P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL",
      query: "drinks",
      near: "Bucarest",
      v: "20190602"
    };
    //async request
    fetch(venuesAPI + new URLSearchParams(params), {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        //console.log(response.response.groups[0].items)
        //after setting this state we receive 30 venues in react console log
        setVenueState(
          { venues: response.response.groups[0].items },
          this.loadMap()
        );
      })
      //console.log(response);
      .catch(error => {
        // Code for handling errors
        console.log("error " + error);
      });
  }
  //third required part to load the map, map variable plus js function to load the map
  //https://developers.google.com/maps/documentation/javascript/tutorial
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.439663, lng: 26.096306 },
      zoom: 14
    });

    //marker function should load at the same time with google maps function, they should display simultaneosly
    //project code 3 windowsshoppingpart1, quote: uses the location array to create an array of markers on initialize, for react should be used .map using value's state
    //using map to loop over venues state, inital state empty but will retrieve the 30 venues we got
    this.state.venues.map(aVenue => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: aVenue.venue.location.lat,
          lng: aVenue.venue.location.lng,
          key: aVenue.venue.id
        },
        map: map,
        name: aVenue.venue.location.name
      });
      return aVenue;
    });
  };

  render() {
    //if (!this.state.venues.length) return <p> se jodioooo </p>
    return (
      <main>
        {/*second request to add the map, a div with the id of map*/}
        <div id="map" />
      </main>
    );
  }
}

//first part to add the map to the App, loading the API
// adding scripts into react https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

function loadMapsAPI(src) {
  const ref = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  ref.parentNode.insertBefore(script, ref);
}

export default App;
