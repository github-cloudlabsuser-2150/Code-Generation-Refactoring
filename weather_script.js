const fetch = require('node-fetch');

const API_KEY = 'your_openweather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Description: ${data.weather[0].description}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Example usage
getWeather('London');