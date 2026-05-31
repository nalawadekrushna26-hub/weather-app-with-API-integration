document.getElementById("btn").addEventListener("click", function () {
    alert("JavaScript is connected!");
});

const apiKey = "cf61723150b20c21ea3fc1f544c4cac2";

function getWeather() {

  const city = document.getElementById("city").value;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      // Log API response
      console.log(data);

    })
    .catch(error => {

      console.log("Error fetching weather data:", error);

    });
}

const apiKey = "cf61723150b20c21ea3fc1f544c4cac2";

function getWeather() {

  const city = document.getElementById("city").value;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      console.log(data); // for debugging

      displayWeather(data);

    })
    .catch(error => {
      console.log("Error:", error);
    });
}

function displayWeather(data) {

  const weatherDiv = document.getElementById("weather");

  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const condition = data.weather[0].description;
  const cityName = data.name;

  weatherDiv.innerHTML = `
    <h2>${cityName}</h2>
    <p> Temperature: ${temp} °C</p>
    <p> Humidity: ${humidity}%</p>
    <p> Condition: ${condition}</p>
  `;
}

function getForecast(city) {

  const url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log("FORECAST:", data);

      displayForecast(data);

    })
    .catch(error => {
      console.log("Forecast error:", error);
    });
}

function displayForecast(data) {

  const forecastDiv = document.getElementById("forecast");

  // filter only 12:00 PM data (1 per day)
  const dailyData = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  forecastDiv.innerHTML = "<h3>5-Day Forecast</h3>";

  dailyData.map(day => {

    forecastDiv.innerHTML += `
      <div class="forecast-card">
        <p> ${day.dt_txt.split(" ")[0]}</p>
        <p> Temp: ${day.main.temp} °C</p>
        <p> ${day.weather[0].description}</p>
      </div>
    `;
  });
}

function getWeather() {

  const city = document.getElementById("city").value;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      displayWeather(data);

      // ADD THIS LINE
      getForecast(city);

    });
}

function getLocationWeather() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(success, error);

  } else {
    alert("Geolocation not supported by your browser");
  }
}
function success(position) {

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("Latitude:", lat);
  console.log("Longitude:", lon);

  const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log("LOCATION WEATHER:", data);

      displayWeather(data);

    })
    .catch(err => console.log(err));
}

function error() {
  alert("Unable to get your location ");
}

displayWeather(data);

const apiKey = "cf61723150b20c21ea3fc1f544c4cac2";

//  MAIN FUNCTION
function getWeather() {

  const city = document.getElementById("city").value;

  const weatherDiv = document.getElementById("weather");
  const errorDiv = document.getElementById("error");
  const loadingDiv = document.getElementById("loading");

  // reset UI
  errorDiv.innerHTML = "";
  weatherDiv.innerHTML = "";

  if (city === "") {
    errorDiv.innerHTML = " Please enter a city name";
    return;
  }

  // show loading
  loadingDiv.style.display = "block";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      loadingDiv.style.display = "none";

      //  API error handling
      if (data.cod !== 200) {
        errorDiv.innerHTML = " City not found or API error!";
        return;
      }

      //  show weather
      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p> Temp: ${data.main.temp} °C</p>
        <p> Humidity: ${data.main.humidity}%</p>
        <p> Condition: ${data.weather[0].description}</p>
      `;

    })
    .catch(error => {

      loadingDiv.style.display = "none";
      errorDiv.innerHTML = " Network error! Try again.";
      console.log(error);

    });
}

let timeout;

function getWeather() {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    fetchWeather();
  }, 500);
}

function fetchWeather() {
  const city = document.getElementById("city").value;

  if (!city) return;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(err => console.log(err));
}
const weatherDiv = document.getElementById("weather");
weatherDiv.innerHTML = "loading..."

if(city.trim() === ""){
    alert("Please enter a city name");
    return;
}
const weatherDiv = document.getElementById("weather");
weatherDiv.innerHTML = "...";