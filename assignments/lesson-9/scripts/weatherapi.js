

var weatherRequest = new XMLHttpRequest();

var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
weatherRequest.open('GET', apiURL, true);

weatherRequest.send();

weatherRequest.onload =  function () {
  var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

 document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}
