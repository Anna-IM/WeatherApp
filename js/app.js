const myKey = config.MY_KEY;
const directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];

function weatherData() {
  // console.log("function");
  const town2 = document.getElementById('town2').value;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + town2 + "&appid=" + myKey;
// console.log(url);

$(document).ready(function(){
  $.ajax({
  url: url,
  type: "GET",
  context: document.body,
  error: function(request, status, error){
    console.log(error);
    $( "#msg" ).text("Error: " + error);
    setInterval('refreshPage()', 2000);
    }
  }).done(function(data) {
    // converting K to C
    const kelvinTemp = data.main.temp;
    const celsiusTemp = kelvinTemp - 273.15;
      console.log(data);
      $("#weather").text(data.weather[0].main);
      $("#temperature").text(Math.round(celsiusTemp));
      $("#wind").text(data.wind.speed);
      //converting degrees to wind direction
    const deg = data.wind.deg;
    const windDir = Math.floor(deg / 22.5 + 0.5);
      // console.log(directions[(windDir % 16)]);
      $("#wind_deg").text(directions[(windDir % 16)]);
  });
});
}

function refreshPage() { 
  location.reload(); 
}