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
    <p>🌡 Temperature: ${temp} °C</p>
    <p>💧 Humidity: ${humidity}%</p>
    <p>☁ Condition: ${condition}</p>
  `;
}