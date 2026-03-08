async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = ProcessingInstruction.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found or invalid API key');
    }

    const data = await response.json();
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `🌬️ Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('condition').textContent = `☁️ Condition: ${data.weather[0].description}`;
  } catch (error) {
    alert(error.message);
  }
}
