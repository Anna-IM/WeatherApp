const myKey = config.MY_KEY;
const directions = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
  "N",
];
const weather = document.querySelector("#weather");
const temperature = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const windDeg = document.querySelector("#windDeg");

const weatherData = () => {
  const town2 = document.getElementById("town2").value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    town2 +
    "&appid=" +
    myKey;
  // console.log(url);

  // update weather data
  const updateWeather = (data) => {
    const kelvinTemp = data.main.temp;
    // converting C to K
    const celsiusTemp = kelvinTemp - 273.15;

    // set weather result
    weather.innerText = data.weather[0].main;

    // set temperature result
    temperature.innerText = Math.round(celsiusTemp);

    // set wind result
    wind.innerText = data.wind.speed;

    //converting degrees to wind direction
    const deg = data.wind.deg;
    const windDir = Math.floor(deg / 22.5 + 0.5);

    // set windDir result
    windDeg.innerText = directions[windDir % 16];

    // set humidity result
    humidity.innerText = data.main.humidity + " %";
  };

  // fetch the data from the weather site
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // update the weather elements
      updateWeather(data);
    })
    .catch((error) => {
      console.log(error);
      errorResult.innerText = "City not found." + " Please, try again";
    });
};
