
// OpenWeather API Key (Replace with your actual API key)
const API_KEY = "fa7893e0933f635b4e10e154ee47a423";

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) return alert("Please enter a city name!");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = `${data.main.temp}°C`;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    }
}