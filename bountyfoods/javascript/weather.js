//const link =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=117.3506&exclude=daily&appid=9dba74ad951c2fadc70f5eb71a9af966&units=metric";

//const link =
("https://api.openweathermap.org/data/3.0/onecall?lat=33.158&lon=117.3506&exclude=daily&appid=5b6969f6bc54c7a51c89ad571b87827d&units=metric");



const link =("http://api.openweathermap.org/data/2.5/forecast?lat=33.158&lon=-117.350&id=524901&appid=5b6969f6bc54c7a51c89ad571b87827d&units=metric");

/* select HTML elements in the document */
const day1temp= document.querySelector(".day1temp");
const day2temp= document.querySelector(".day2temp");
const day3temp= document.querySelector(".day3temp");
const day4temp= document.querySelector(".day4temp");

const day1Icon = document.querySelector(".day1Icon");

const day2Icon = document.querySelector(".day2Icon");
const day3Icon = document.querySelector(".day3Icon");
const day4Icon = document.querySelector(".day4Icon");

const day1Desc = document.querySelector(".day1desc");
const day2Desc = document.querySelector(".day2desc");
const day3Desc = document.querySelector(".day3desc");
const day4Desc = document.querySelector(".day4desc");

const day1humidity = document.querySelector(".day1humid");
const day2humidity = document.querySelector(".day2humid");
const day3humidity = document.querySelector(".day3humid");
const day4humidity = document.querySelector(".day4humid");



async function apiFetch(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    
    displayResults(data);
  }
}


function displayResults(weatherData) {
  //console.log(weatherData);
  day1temp.innerHTML=(weatherData.list[0].main.temp)
  day2temp.innerHTML=(weatherData.list[3].main.temp)
  day3temp.innerHTML=(weatherData.list[11].main.temp)
  day4temp.innerHTML=(weatherData.list[19].main.temp)
  
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  day1Icon.setAttribute("src", iconsrc)
  const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;
  day1Icon.setAttribute("src", iconsrc)
  const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[11].weather[0].icon}.png`;
  day1Icon.setAttribute("src", iconsrc)
  const iconsrc4 = `https://openweathermap.org/img/w/${weatherData.list[19].weather[0].icon}.png`;
  day1Icon.setAttribute("src", iconsrc)
  
  day2Icon.setAttribute("src", iconsrc2)
  day3Icon.setAttribute("src", iconsrc3)
  day4Icon.setAttribute("src", iconsrc4)
  
  day1Desc.innerHTML=(weatherData.list[0].weather[0].description)
  day2Desc.innerHTML=(weatherData.list[3].weather[0].description)
  day3Desc.innerHTML=(weatherData.list[11].weather[0].description)
  day4Desc.innerHTML=(weatherData.list[19].weather[0].description)

  day1humidity.innerHTML=(weatherData.list[0].main.humidity)
  day2humidity.innerHTML=(weatherData.list[3].main.humidity)
  day3humidity.innerHTML=(weatherData.list[11].main.humidity)
  day4humidity.innerHTML=(weatherData.list[19].main.humidity)



}

apiFetch(link);


/*dates for weather templates*/

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const day4 = document.querySelector(".day4");

const now = new Date();
const tomorrow = new Date();
const threedays = new Date();
const fourdays = new Date();

tomorrow.setDate(now.getDate()+1);
threedays.setDate(now.getDate()+2);
fourdays.setDate(now.getDate()+3);

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldate1 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
tomorrow
);
const fulldate2 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  threedays
);
const fulldate3 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  fourdays
);


day1.innerHTML = `<strong>${fulldate}</strong>`;
day2.innerHTML = `<strong>${fulldate1}</strong>`;
day3.innerHTML = `<strong>${fulldate2}</strong>`;
day4.innerHTML = `<strong>${fulldate3}</strong>`;
