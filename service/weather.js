const axios = require("axios");
require("dotenv").config();

//otra forma
const getWheater = async ({ city }) => {
  try {
    console.log(city);
    const resp = await axios(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: process.env.API_WEATHER,
          units: "metric",
          lang: "sp",
        },
      }
    );

    const data = resp.data;
    console.log(data);
    return {
      desc: data.weather[0].description,
      icon: ` http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temp: data.main.temp,
      name: data.name,
    };
  } catch (error) {
    console.error(error.response.data.message);
  }
};

module.exports = { getWheater };
