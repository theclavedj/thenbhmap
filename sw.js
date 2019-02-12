if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "d814c20d240357e495905643d3d84695"
  },
  {
    "url": "precache-manifest.25094fc83f4831ceaf18638fe2e63530.js",
    "revision": "25094fc83f4831ceaf18638fe2e63530"
  },
  {
    "url": "service-worker.js",
    "revision": "e105cdd35fdd79c01ea0769681768c4d"
  },
  {
    "url": "static/css/main.1952cc69.chunk.css",
    "revision": "8edc6ec7d907575df5ccda2e193a7157"
  },
  {
    "url": "static/js/1.e16964ea.chunk.js",
    "revision": "6cdb54e097407bb82d70d45e8efc90dc"
  },
  {
    "url": "static/js/main.c9b0122f.chunk.js",
    "revision": "55dd1c1f53447001103c2f51f0a5b6b6"
  },
  {
    "url": "static/js/runtime~main.229c360f.js",
    "revision": "3b44b5daad3fcbefa8b355dfbc3d9630"
  }
]);

/* custom cache rules*/
workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
