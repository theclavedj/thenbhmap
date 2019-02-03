import React, { Component } from 'react';
import './App.css';

class App extends Component {

//first part to add a map to the App, loading the API
// adding scripts into react https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

componentDidMount() {
  const script = document.createElement("script");

  script.src = "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCaOk9oP1NSXBtSPcrgHAO2fL3gu_UQzWs&v=3";
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);
  console.log(script);
}


  render() {
    return (
      <div className="map">
      </div>
    );
  }
}

export default App;
