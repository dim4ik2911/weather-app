console.log("Client side javascript file is loaded");

fetch("http://localhost:3000/weather?address=londofffn").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log("Unable to find location! Try another search!");
    } else {
      console.log(data.forecastData);
      console.log(data.location);
    }
  });
});
