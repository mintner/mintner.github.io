//Weather for Washingtion D.C temple
var apiURLW = 'https://api.openweathermap.org/data/2.5/weather?zip=20895,us&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
var weatherRequestW = new XMLHttpRequest();
weatherRequestW.open('GET', apiURLW, true)
weatherRequestW.send();
weatherRequestW.onload = function () {
    var weatherData = JSON.parse(weatherRequestW.responseText);

    document.getElementById('currenttempw').innerHTML = weatherData.main.temp.toFixed(0) + "&degF";
}

//Weather for Oakland temple
var apiURLO = 'https://api.openweathermap.org/data/2.5/weather?zip=94602,us&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
var weatherRequestO = new XMLHttpRequest();
weatherRequestO.open('GET', apiURLO, true)
weatherRequestO.send();
weatherRequestO.onload = function () {
    var weatherData = JSON.parse(weatherRequestO.responseText);

    document.getElementById('currenttempo').innerHTML = weatherData.main.temp.toFixed(0) + "&degF";
}

//Weather for Gilbert temple
var apiURLG = 'https://api.openweathermap.org/data/2.5/weather?zip=85297,us&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
var weatherRequestG = new XMLHttpRequest();
weatherRequestG.open('GET', apiURLG, true)
weatherRequestG.send();
weatherRequestG.onload = function () {
    var weatherData = JSON.parse(weatherRequestG.responseText);

    document.getElementById('currenttempga').innerHTML = weatherData.main.temp.toFixed(0) + "&degF";
}

//Weather for Salt Lake
var apiURLS = 'https://api.openweathermap.org/data/2.5/weather?zip=84150,us&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
var weatherRequestS = new XMLHttpRequest();
weatherRequestS.open('GET', apiURLS, true)
weatherRequestS.send();
weatherRequestS.onload = function () {
    var weatherData = JSON.parse(weatherRequestS.responseText);

    document.getElementById('currenttempsl').innerHTML = weatherData.main.temp.toFixed(0) + "&degF";
}