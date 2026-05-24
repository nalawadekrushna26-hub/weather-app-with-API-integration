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