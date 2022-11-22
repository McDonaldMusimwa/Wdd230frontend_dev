
const link = "https://api.openweathermap.org/data/2.5/weather?lat=33.92&lon=18.42&appid=9dba74ad951c2fadc70f5eb71a9af966&units=metric"

// select HTML elements in the document
const currentTemp = document.querySelector('h3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchill = document.querySelector('#windchill')
const windspeed = document.querySelector('#windspeed')



async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
   
    windchill.innerHTML=`${weatherData.wind.gust}`
    windspeed.innerHTML=`${weatherData.wind.speed}`
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    

}

apiFetch(link);
