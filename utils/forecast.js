const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2985e9e36d0035855d1d8b3970f799ee&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unabled to connect to the service", undefined);
    } else if (body.error) {
      callback("Unabled to find location", undefined);
    } else {
      callback(
        undefined,
        `It's currently ${body.current.temperature} degrees out. It feelse like ${body.current.feelslike} degrees.`
      );
    }
  });
};

module.exports = forecast;
