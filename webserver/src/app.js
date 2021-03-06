const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Set up handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Dmitrijs Paklons",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Dmitrijs Paklons",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "Let's try to help you!",
    title: "Help",
    name: "Dmitrijs Paklons",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          address: req.query.address,
          forecastData: forecastData,
          location: location,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("notfound", {
    title: "404",
    message: "Help article not found",
    name: "Dmitrijs Paklons",
  });
});
app.get("*", (req, res) => {
  res.render("notfound", {
    title: "404",
    message: "Page not found",
    name: "Dmitrijs Paklons",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
