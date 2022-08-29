const axios = require('axios')

const getWeather = (lat, lon) => {
	const API = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&units=I`
	const weatherInfo = axios.get(API).catch((err) => console.log('Error: something went wrong from getWeather at server', err))
	return weatherInfo
}

class Forecast {
	constructor(chosenCity) {
		this.date = chosenCity.ob_time;
		this.description = `The temperature is ${chosenCity.temp}, but feels like ${chosenCity.app_temp} with ${chosenCity.weather.description.toLowerCase()}`;
	}
}

module.exports = { Forecast, getWeather};