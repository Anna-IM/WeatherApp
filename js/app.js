
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
    let celsius_temp = kelvin_temp - 273.15;
      console.log(data);
      $("#weather").text(data.weather[0].main);
      $("#temperature").text(Math.round(celsius_temp));
      $("#wind").text(data.wind.speed);
  });
});
}

function refreshPage() { 
  location.reload(); 
}
//To make a function for the wind direction