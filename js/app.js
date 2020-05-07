
function myFunction() {
  console.log("function");

  let my_key = config.MY_KEY;
  let town2 = document.getElementById('town2').value;
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + town2 + "&appid=" + my_key;

console.log(url);

$(document).ready(function(){
  $.ajax({
  url: url,
  type: "GET",
  context: document.body,
  error: function(request, status, error){
    console.log(error);
    $( "#msg" ).text("Error: " + error);
    // $( "#msg2" ).text("Please try again");
    setInterval('refreshPage()', 2000);
    // error response on the page
    // alert(request.responseText);
    }
//   success: function(result){
//   // console.log(result); 
//   }
  }).done(function(data) {
    let kelvin_temp = data.main.temp;
    // converting K to C
    let celsius_temp = kelvin_temp - 273.15;
      console.log(data);
      $("#weather").text(data.weather[0].main);
      $("#temperature").text(Math.round(celsius_temp));
      $("#wind").text(data.wind.speed);
      //converting degrees to wind direction
    let directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
    let deg = data.wind.deg;
    let wind_dir = Math.floor((deg/22.5) + 0.5);
      console.log(directions[(wind_dir%16)]);
      $("#wind_deg").text(directions[(wind_dir%16)]);
  });
});
}

function refreshPage() { 
  location.reload(); 
}