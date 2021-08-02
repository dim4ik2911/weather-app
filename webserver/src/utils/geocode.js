const request = require("request");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGltNGlrMjkxMSIsImEiOiJja3IxMGJuN2QwYjk4MnJxbXVvc2p0enZvIn0.GvM0XT43P1PbihGvjtestQ`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unabled to connect to the service", undefined);
    } else if (!body.features.length) {
      callback("Unabled to find location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
