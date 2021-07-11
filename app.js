const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2985e9e36d0035855d1d8b3970f799ee&query=London";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
