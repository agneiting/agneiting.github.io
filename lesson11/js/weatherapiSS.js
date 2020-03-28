const apiURLSS = '//api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=04076ec099a473169d26a85db37740a3';

fetch(apiURLSS)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp.toFixed(1);
    document.getElementById('description').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('temp_max').textContent = jsObject.list[0].main.temp_max.toFixed(1);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('speed').textContent = jsObject.list[0].wind.speed;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    //Adding Current Conditions to Header
    document.getElementById('currentCond').innerHTML=jsObject.name;
  });