self.__precacheManifest = [
  {
    "revision": "229c360febb4351a89df",
    "url": "/static/js/runtime~main.229c360f.js"
  },
  {
    "revision": "6c93d54fd7183005c0c4",
    "url": "/static/js/main.6c93d54f.chunk.js"
  },
  {
    "revision": "e16964ea3567ecaa3291",
    "url": "/static/js/1.e16964ea.chunk.js"
  },
  {
    "revision": "6c93d54fd7183005c0c4",
    "url": "/static/css/main.865a37c6.chunk.css"
  },
  {
    "revision": "a0aa39bbca5e83fed20cb1564803005e",
    "url": "/index.html"
  }
];

const response = await fetch('https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyD8jbgZnV1lh455L-twNQh45MFwRVIKleU&v=3&callback=initMap');

if (cacheable.isResponseCacheable(response)) {
  const cache = await caches.open('api-cache');
  cache.put(response.url, response);
} else {
  alert("Huston we got problems! Map cannot be loaded right now")// Do something when the response can't be cached.
}
