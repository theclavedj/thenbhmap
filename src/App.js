import React, { Component } from "react";
import "./App.css";

class App extends Component {
//state of component which will receive info from foursquare api
state = {
  venues: [] //empty array which will be filled once the function getinfo loads the information from api async request
}

  componentDidMount() {
    //when the componentDidMount starts the loadmap function should be loaded and should call getinfo function to load foursquare api
    this.loadMap();
    this.getInfo();
    //console.log(this.getInfo);
    //console.log(this.loadMap)
  }

  loadMap = () => {
    window.initMap = this.initMap;
    //console.log(window.initMap)
  };
  //https://developer.foursquare.com/docs/api
  //create venue app using react with foursquare api http://stevebrown.co/journal/creating-a-local-venue-app-using-reactredux-with-the-foursquare-api-part-i
  // react docs, ajax and apis https://reactjs.org/docs/faq-ajax.html
  getInfo() {

    const venuesAPI = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P",
      client_secret: "P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL",
      query: "drinks",
      near: "bucarest",
      v: "20190602",
    }

    fetch(venuesAPI + new URLSearchParams(parameters), {
      method: "GET"
    }).then(response =>
      response.json()).then(response => {
        this.setState({venues: response.response.groups[0].items})
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
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.439663, lng: 26.096306 },
      zoom: 14
    });

//marker function should load at the same time with google maps function, they should display simultaneosly

var marker = new window.google.maps.Marker({
  position: {lat: 44.432589, lng: 26.029261},
  map: map,
  title: "lets try a marker"
})
}

  render() {
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

const loadScript = document.createElement("script");

loadScript.src =
  "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCaOk9oP1NSXBtSPcrgHAO2fL3gu_UQzWs&v=3&callback=initMap";
loadScript.async = true;
loadScript.defer = true;
document.body.appendChild(loadScript);
//console.log(loadScript);

export default App;
