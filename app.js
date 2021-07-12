const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2985e9e36d0035855d1d8b3970f799ee&query=London";

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  // console.log(data);
  console.log(
    `${data.weather_descriptions[0]}. It's currently ${data.temperature} degrees out. It feelse like ${data.feelslike} degrees.`
  );
});

const url1 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGltNGlrMjkxMSIsImEiOiJja3IxMGJuN2QwYjk4MnJxbXVvc2p0enZvIn0.GvM0XT43P1PbihGvjtestQ&limit=1";

request({ url: url1, json: true }, (error, response) => {
  const data1 = response.body.features[0];
  console.log(
    `Lat is equal to ${data1.center[0]}, Long is equal to ${data1.center[1]}`
  );
});
