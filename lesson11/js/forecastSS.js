const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=04076ec099a473169d26a85db37740a3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //Create day of week array to later show the day of the week in the table.
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    //Only look where the time is 18:00:00.
    const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    console.log(fiveDayForecast);

    //Increment through the 5 days to add info.
    for (let i=0; i<fiveDayForecast.length; i++) {
        //Set day.
        currentDate = new Date()
        cDay = currentDate.getDay()
        nextDay = dayOfWeek[cday+1]
        document.getElementById(`day${i+1}`).textContent = nextDay;
        
        //Set temperature.
        document.getElementById(`temp${i+1}`).textContent = fiveDayForecast[i].main.temp + "&#176";
        
        //Set icon.
        var iconULR = "http://openweathermap.org/img/wn/" + fiveDayForecast[i].main.icon + "@2x.png"
        document.getElementById(`icon${i+1}`).setAttribute("src", iconURL);
        document.getElementById(`icon${i+1}`).setAttribute("alt", fiveDayForecast[i].main.description);
    }

  });