if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

workbox.routing.registerRoute(
  'https://api.foursquare.com/v2/venues/explore?client_id=RI1LDPFFA2C2K0C0DP0TBBY2JTWA30F2O0DNMJTZRQGVXL3P&client_secret=P2RAP3W3EO4MGJDOVUQEA0FG1YEWMG23LMR00A3WHZ55GNQL&query=coffee&near=Bucarest&radius=50000&v=20190902',
  workbox.strategies.networkFirst()
)
