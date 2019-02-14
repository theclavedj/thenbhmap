module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,js,ico,html,css}"
  ],
  "swDest": "build\\sw.js",
  "swSrc": "src/sw.js"
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};
