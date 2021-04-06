const express = require("express");
const body = require("body-parser");
const router = express.Router();

const weather = require("../service/weather");

module.exports = (app) => {
  app.get("/", (req, res) => {
    //envio de archivos html
    //res.sendFile(path.join(__dirname, "/views/index.html"));
    //rederiza hbs
    res.render("index", {
      name: "anggie",
    });
  });
  app.get("/coords", async (req, res) => {
    result = await weather.getWheater(req.query);
    res.render("index", {
      icon: result.icon,
      city: `Ciudad: ${result.name}`,
      temp: `Temperatura actual: ${result.temp}°C`,
      desc: result.desc,
    });
  });

  app.use(router);
};
