let now = new Date();
let h2 = document.querySelector(".current-date");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h1 = document.querySelector("h1");
h1.innerHTML = `${hours}:${minutes}`;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
h2.innerHTML = `${day}, ${date} ${month}, ${year}`;

function displayTemperature(response) {
  console.log(response.data.main.humidity);
  let tempNow = document.querySelector(".temp-now");
  tempNow.innerHTML = Math.round(response.data.main.temp);
  let currentCountry = document.querySelector(".current-location");
  currentCountry.innerHTML = response.data.sys.country;
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = response.data.name;
  let skyDescription = document.querySelector("#weather-description");
  skyDescription.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let weatherIcon = document.querySelector("#current-icon");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "c0782bbec2a05e6907ffc16c52c06706";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Yaounde&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
