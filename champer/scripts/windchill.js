var windspeed = 50;
var temperature = 100;
if (windspeed>3.0 &&temperature>=50){
    const windchill = 35.74 + (0.6215*temperature)-(35.75*(windspeed**0.16)) + 0.4275 * temperature * (windspeed**0.16)
    document.getElementById("windspeed").innerHTML= windspeed
    document.getElementById("windchill").innerHTML= windchill.toFixed(2);
    console.log(windchill)
}else{
    console.log("provide valid windspeed and temperature")
}

