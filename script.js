const apiKey = '2a92aeed8855d0c3dbb2528d3ed20dc0'; 
function getWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { description } = data.weather[0];

        document.getElementById("weather-info").innerHTML = `
          <p>City: ${name}</p>
          <p>Temperature: ${temp} °C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Condition: ${description}</p>
        `;
      } else {
        document.getElementById("weather-info").innerHTML = `<p>City not found. Please try again.</p>`;
      }
    })
    .catch(error => {
      console.error("Error fetching the weather data: ", error);
      document.getElementById("weather-info").innerHTML = `<p>Error fetching the weather data.</p>`;
    });
}

