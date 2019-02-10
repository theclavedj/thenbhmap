import React, { Component } from "react";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  //proper usage of constructor and super https://reactjs.org/docs/react-component.html
  constructor() {
    super();
    //state of component which will receive info from foursquare api
    this.state = {
      query: '', //empty string which will receive input from user and will show markers according to the search
      venues: [] //empty array which will be filled once the function getinfo loads the information from foursquare api async request
    };
    this.markers = []; //empty array of markers which will be filled later on
  }

  componentDidMount() {
    //when the componentDidMount starts the loadmap function should be loaded to get google maps and also should call getinfo function to load foursquare api
    this.getInfo();
    //console.log(this.getInfo);
  }

  loadMap = () => {
    window.initMap = this.initMap;
    loadMapsAPI(
      "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyD8jbgZnV1lh455L-twNQh45MFwRVIKleU&v=3&callback=initMap"
    );
    //console.log(window.initMap)
  };
  //https://developer.foursquare.com/docs/api
  //create venue app using react with foursquare api http://stevebrown.co/journal/creating-a-local-venue-app-using-reactredux-with-the-foursquare-api-part-i
  // react docs, ajax and apis https://reactjs.org/docs/faq-ajax.html
  getInfo() {
    //this is necesary as we are working with constructor and super definitions
    let setVenueState = this.setState.bind(this);
    //variable which saves default foursquare url
    const venuesAPI = "https://api.foursquare.com/v2/venues/explore?";
    //variable wich saves details of foursquare such as id and type of information we are requesting
    const params = {
      client_id: "RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P", //foursquare client id
      client_secret: "P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL", // foursquare client secret
      query: "coffee", //type of information we are requesting to foursquare api
      near: "Bucarest", //near bucarest city
      radius: "50000", //radius of requested data on Bucharest
      v: "20190902" //date
    };
    //async request, reading and updating query params https://javascriptplayground.com/url-search-params/
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
          //because it's an async request, the loadMap function should be executed AFTER we receive information from external source
        );
      })
      //console.log(response);
      .catch(error => {
        // Code for handling errors, an alert message will popup when there is an error loading foursquare api
        alert(
          "Ups! We're sorry, something went wrong while loading Foursquare info  >:(  try again by pressing OK button"
        );
        //console.log("error " + error);
      });
  }
  //third required part to load the map, map variable plus js function to load the map
  //https://developers.google.com/maps/documentation/javascript/tutorial
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.435524, lng: 26.102536 },
      zoom: 15,
      //google maps style wizard https://mapstyle.withgoogle.com/
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8ec3b9"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#334e87"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "poi.business",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#304a7d"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "road.arterial",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#2c6675"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#255763"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#0e1626"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70"
            }
          ]
        }
      ] //don't forget this line has been collapsed to the quantity of code
    });
    //adding variable for the searchbox input field and autocomplete
    const searchBox = new window.google.maps.places.Autocomplete(
      document.getElementById("places-search")
    );
    // Bias the searchbox to within the bounds of the map.
    searchBox.bindTo("bounds", map);

    //https://developers.google.com/maps/documentation/javascript/infowindows
    //removed below variable "infowindow" from array function (this.state.venues.map) to avoid multiple open infowindows simultaneosly
    const infowindow = new window.google.maps.InfoWindow();
    //marker function should load at the same time with google maps function, they should display simultaneosly
    //project code 3 windowsshoppingpart1, quote: uses the location array to create an array of markers on initialize, for react should be used .map using venue's state
    //using map to loop over venues state, inital state empty but will retrieve the 30 venues we got from the fetch call
    this.state.venues.map(aVenue => {
      //variable which will load the infowindow in the page, will provide name of the place and address
      const contentString = `${aVenue.venue.name},
      ${aVenue.venue.location.address},`;
      //variable which saves marker's new icon
      const image = "http://i64.tinypic.com/macq41.png"
      //variable which loads the markers in the page
      let marker = new window.google.maps.Marker({
        title: aVenue.venue.name,
        map: map,
        icon: image,
        animation: window.google.maps.Animation.DROP,
        position: {
          lat: aVenue.venue.location.lat,
          lng: aVenue.venue.location.lng,
          key: aVenue.venue.id
        }
      });
      //add new markers to marker array, so we can use it to filter through search each marker
      this.markers.push(marker);
      //console.log(marker)
      this.setState({ aVenue })
      //console.log(aVenue)
      //function which will listen for clicks in the markers and will animate the icon for 900 ms, also will zoom in selected marker
      marker.addListener("click", function() {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => { marker.setAnimation(null)}, 1000)
        this.map.setZoom(18);
        this.map.setCenter(marker.position)
        //display content on InfoWindow
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      });
      return marker;
    });
    //function which will listen for infowindow close button, once the x is clicked will zoom out the area
    infowindow.addListener("closeclick", function() {
        map.panTo(this.getPosition());
        map.setZoom(15);
    })
  };
//function which will show the markers that match text input from the searchbox area
filterVenues(query) {
  //changed filter method for foreach method as we are not returning a value
  this.markers.forEach(marker => {
    //console.log(marker)
    //filter the markers by name and set visibility to true if it matches the query
    marker.title.toLowerCase().includes(query.toLowerCase()) === true ?
    marker.setVisible(true) :
    marker.setVisible(false);
  })
  this.setState({ query });
}
//listeners for show all and hide all buttons
//document.getElementById('show-listings').addEventListener('click', showListings);
//  document.getElementById("hide-listings").window.addEventListener('click', this.hideListings);
  //hideListings() {
  //  console.log("click" + 1)
  //  this.markers.forEach(marker => {
  //    marker.setVisible(false)
  //  })
  //}

  render() {
    //if (!this.state.venues.length) return <p> se jodioooo </p>
    const venueList = this.state.venues.map(item =>
    <li className="venues-list" key={item.venue.id}>{item.venue.name}</li>
  )
    return (
      <main id="main">
        <div className="navbar">COFFEE TIME: Search for cheapest coffee places arround Bucharest</div>
        <div className="options-box">
        <div className="markers-title">Search for nearby places</div>
        <div><input
        id="places-search"
        type="text"
        placeholder="Type name of fav coffee place"
        /*below the value will be the state of what the user wrote*/
        value={this.state.query}
        /*on change the event listener invokes filterVenues, then calls setState*/
        onChange={event => this.filterVenues(event.target.value)}
        />
        <input id="go-places" type="button" value="Go" /></div>
        <ol>{venueList}</ol>
        {/*<div>
          <input id="show-listings" type="button" value="Show all places"/>
          <input id="hide-listings" type="button" value="Hide them all" />
        </div>*/}
        {/*second request to add the map, a div with the id of map*/}
          <div id="map" />
        </div>
      </main>
    );
  }
}

//first part to add the map to the App, loading the API
//updated script functionallity, as previously was causing a bug https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
function loadMapsAPI(src) {
  const ref = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  ref.parentNode.insertBefore(script, ref);
}
export default App;
