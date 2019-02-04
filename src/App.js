import React, { Component } from 'react';
import './App.css';

class App extends Component {

componentDidMount() {
  this.loadMap()
  //console.log(this.loadMap)
}

loadMap = () => {
  window.initMap = this.initMap
  //console.log(window.initMap)
}


//third required part to load the map, map variable plus js function to load the map
//https://developers.google.com/maps/documentation/javascript/tutorial
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.439663, lng: 26.096306},
      zoom: 14
    });
  }

  render() {
    return (
      <main>
      {/*second request to add the map, a div with the id of map*/}
        <div id="map">
        </div>
      </main>
    );
  }
}

//first part to add the map to the App, loading the API
// adding scripts into react https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

const loadScript = document.createElement("script");

loadScript.src = "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCaOk9oP1NSXBtSPcrgHAO2fL3gu_UQzWs&v=3&callback=initMap";
loadScript.async = true;
loadScript.defer = true;
document.body.appendChild(loadScript);
//console.log(loadScript);

export default App;
