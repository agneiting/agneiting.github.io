function windChill() {
    //Get the two input values of temperature and wind speed, 
    var temp = document.getElementById("temp").innerHTML;
    var speed = document.getElementById("speed").innerHTML;

    //Declare variables.
    var message = "Broken";
    var windChill = 0;

    //Check to make sure they meet the required values allowed to officially calculate the wind chill, 
    if ((temp <= 50) && (speed > 3)) {
        windChill = 35.74 + (.6215 * temp) - (35.75 * speed ** .16) + (.4275 * temp * speed ** .16);
        message = Math.round(windChill);
    }
    else {
        message = "N/A";
    }

    //Output windChill to html.
    document.getElementById("windChill").innerHTML = message;
}