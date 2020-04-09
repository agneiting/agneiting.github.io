const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5732738&units=imperial&appid=04076ec099a473169d26a85db37740a3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    var currentTemp = Math.trunc( jsObject.main.temp );

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather.icon + '.png';  // note the concatenation

    document.getElementById('main').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = currentTemp;

  });
