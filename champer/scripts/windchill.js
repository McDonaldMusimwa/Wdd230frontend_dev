const link = "https://api.openweathermap.org/data/2.5/weather?lat=33.92&lon=18.42&appid=9dba74ad951c2fadc70f5eb71a9af966"

getWeatherData(link)

async function getWeatherData(link) {
    const response = await fetch(link)

    if (response.ok) {
        const weatherData = await response.json();
        console.log(weatherData)
        appendDom(weatherData)
    }



}






function appendDom(data) {

    
    document.getElementById("windspeed").innerHTML = windspeed
    document.getElementById("windchill").innerHTML = windchill.toFixed(2);



}