(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(14),n(1)),s=n(2),c=n(4),u=n(3),p=n(5),y=(n(16),n(19),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{tabIndex:"-1","aria-hidden":"true","aria-label":"Map with available Coffee shops within Bucharest",id:"map"})}}]),t}(a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar","aria-label":"Search for cheapest coffee places arround Bucharest",tabIndex:"0"},o.a.createElement("h3",null,"COFFEE TIME: Search for cheapest coffee places arround Bucharest"))}}]),t}(a.Component);var m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){n.setState({query:e})},n.loadMap=function(){window.initMap=n.initMap,function(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=e,n.async=!0,n.defer=!0,t.parentNode.insertBefore(n,t)}("https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyD8jbgZnV1lh455L-twNQh45MFwRVIKleU&v=3&callback=initMap")},n.initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:44.435524,lng:26.102536},zoom:15,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]});new window.google.maps.places.Autocomplete(document.getElementById("places-search")).bindTo("bounds",e);var t=new window.google.maps.InfoWindow;n.state.venues.map(function(a){var o="".concat(a.venue.name,",\n      ").concat(a.venue.location.address,","),r=new window.google.maps.Marker({title:a.venue.name,map:e,icon:"http://i64.tinypic.com/macq41.png",animation:window.google.maps.Animation.DROP,position:{lat:a.venue.location.lat,lng:a.venue.location.lng,key:a.venue.id}});return n.markers.push(r),n.setState({filteredVenues:n.state.venues}),r.addListener("click",function(){r.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){r.setAnimation(null)},1e3),this.map.setZoom(18),this.map.setCenter(r.position),t.setContent(o),t.open(e,r)}),r}),t.addListener("closeclick",function(){e.panTo(this.getPosition()),e.setZoom(15)})},n.state={query:"",filteredVenues:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"getInfo",value:function(e){var t=this,n=this.setState.bind(this);fetch("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams({client_id:"RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P",client_secret:"P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL",query:"coffee",near:"Bucarest",radius:"50000",v:"20190902"}),{method:"GET"}).then(function(e){return e.json()}).then(function(e){n({venues:e.response.groups[0].items},t.loadMap()),t.markers=[]}).catch(function(e){alert("Ups! We're sorry, something went wrong while loading Foursquare info  >:(  try again by pressing OK button")})}},{key:"filterVenues",value:function(e){var t=this.state.venues.filter(function(t){return t.venue.name.toLowerCase().includes(e.toLowerCase())});this.markers.forEach(function(t){!0===t.title.toLowerCase().includes(e.toLowerCase())?t.setVisible(!0):t.setVisible(!1)}),this.setState({filteredVenues:t,query:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("main",{id:"main",tabIndex:"-1"},o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement("div",{className:"options-box",tabIndex:"-1"},o.a.createElement("div",{className:"markers-title",tabIndex:"0","aria-label":"Search area"},"Search for nearby places"),o.a.createElement("input",{id:"places-search",type:"text","aria-label":"Search for your favorite coffee by typing here",tabIndex:"0",placeholder:"Type name of fav coffee place",onChange:function(t){return e.filterVenues(t.target.value)},value:this.state.query}),o.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit",tabIndex:"0","aria-label":"Submit button to request a place"}),o.a.createElement("div",{className:"dd",tabIndex:"-1"},this.state.filteredVenues.map(function(t){return o.a.createElement("li",{onClick:e.tick,key:t.venue.id,className:"venues-list",tabIndex:"0","aria-label":"Results for searched coffee specifications"},t.venue.name)}))))}}]),t}(a.Component),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");d?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):h(t,e)})}}()},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.5a489645.chunk.js.map