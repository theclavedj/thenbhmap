(this.webpackJsonpmylastproject=this.webpackJsonpmylastproject||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),l=a.n(o),s=(a(13),a(1)),i=a(2),c=a(4),u=a(3),y=(a(14),a(15),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{tabIndex:"-1","aria-hidden":"true","aria-label":"Map with available Coffee shops within Bucharest",id:"map"})}}]),a}(r.Component)),p=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar","aria-label":"Search for cheapest coffee places arround Bucharest",tabIndex:"0"},n.a.createElement("h3",null,"COFFEE TIME: Search for cheapest coffee places arround Bucharest"))}}]),a}(r.Component);var m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateQuery=function(t){e.setState({query:t})},e.loadMap=function(){window.initMap=e.initMap,function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=e,a.async=!0,a.defer=!0,t.parentNode.insertBefore(a,t)}("https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyD8jbgZnV1lh455L-twNQh45MFwRVIKleU&v=3&callback=initMap")},e.initMap=function(){var t=new window.google.maps.Map(document.getElementById("map"),{center:{lat:44.435524,lng:26.102536},zoom:15,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]}),a=new window.google.maps.InfoWindow;e.state.venues.map((function(r){var n="".concat(r.venue.name,",\n      ").concat(r.venue.location.address,". Data courtesy of Foursquare"),o=new window.google.maps.Marker({title:r.venue.name,map:t,icon:"https://i.ibb.co/D5P9LL1/coffee-icon.png",animation:window.google.maps.Animation.DROP,position:{lat:r.venue.location.lat,lng:r.venue.location.lng,key:r.venue.id}});return e.markers.push(o),e.setState({filteredVenues:e.state.venues}),o.addListener("click",(function(){o.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout((function(){o.setAnimation(null)}),1e3),this.map.setZoom(18),this.map.setCenter(o.position),a.setContent(n),a.open(t,o)})),o})),a.addListener("closeclick",(function(){t.panTo(this.getPosition()),t.setZoom(15)}))},e.tick=function(t){var a=e.state.markers.filter((function(e){return e.id===a.id}))[0];console.log(a)},e.state={query:"",filteredVenues:[],markers:[],venues:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"getInfo",value:function(e){var t=this,a=this.setState.bind(this);fetch("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams({client_id:"RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P",client_secret:"P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL",query:"coffee",near:"Bucarest",radius:"50000",v:"20190902"}),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a({venues:e.response.groups[0].items},t.loadMap()),t.markers=[]})).catch((function(e){alert("Ups! We're sorry, something went wrong while loading Foursquare info  >:(  try again by pressing OK button")}))}},{key:"filterVenues",value:function(e){var t=this.state.venues.filter((function(t){return t.venue.name.toLowerCase().includes(e.toLowerCase())}));this.markers.forEach((function(t){!0===t.title.toLowerCase().includes(e.toLowerCase())?t.setVisible(!0):t.setVisible(!1)})),this.setState({filteredVenues:t,query:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("main",{id:"main",tabIndex:"-1"},n.a.createElement(p,null),n.a.createElement(y,null),n.a.createElement("div",{className:"options-box",tabIndex:"-1"},n.a.createElement("div",{className:"markers-title",tabIndex:"-1","aria-label":"Search area"},"Search for nearby places"),n.a.createElement("input",{id:"places-search",type:"text","aria-label":"Search for your favorite coffee by typing here",tabIndex:"0",placeholder:"Type name of fav coffee place",onChange:function(t){return e.filterVenues(t.target.value)},value:this.state.query}),n.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit",tabIndex:"0","aria-label":"Submit button to request a place"}),n.a.createElement("div",{className:"dd",tabIndex:"-1"},this.state.filteredVenues.map((function(t){return n.a.createElement("ol",{onClick:e.tick,key:t.venue.id,className:"venues-list",tabIndex:"0","aria-label":"Results for searched coffee specifications"},t.venue.name)})))))}}]),a}(r.Component),f=a(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));navigator.serviceWorker.getRegistrations().then((function(e){var t,a=Object(f.a)(e);try{for(a.s();!(t=a.n()).done;){t.value.unregister()}}catch(r){a.e(r)}finally{a.f()}})),l.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e6c1278a.chunk.js.map