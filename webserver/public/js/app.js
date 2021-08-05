console.log("Client side javascript file is loaded");

// fetch("http://localhost:3000/weather?address=londofffn").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log("Unable to find location! Try another search!");
//     } else {
//       console.log(data.forecastData);
//       console.log(data.location);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.innerHTML = "&nbsp;";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent =
            "Unable to find location! Try another search!";
          messageTwo.innerHTML = "&nbsp;";
        } else {
          messageOne.textContent = data.forecastData;
          messageTwo.textContent = data.location;
        }
      });
    }
  );
});
