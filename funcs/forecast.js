const axios = require('axios')
const cache = require('../caches/cache')
// i wanna get a 7 day forecast
const getWeather = (lat, lon) => {
	const key = 'weather-' + lat + lon;
	const API = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=7&units=I&key=${process.env.WEATHER_API_KEY}`

	if(cache[key] && (Date.now() - cache[key].timestamp < 50000)){
		console.log('Cache hit');
		return cache[key].data
	}else{
		const weatherInfo = axios.get(API).catch((err)=>console.log('Something went wrong from getWeather', err))
		console.log('Cache miss')
		cache[key] = {}
		cache[key].timestamp = Date.now()
		cache[key].data = weatherInfo
		return weatherInfo
	}
}

// MY ORIGINAL GETWEATHER FUNCTION
// const getWeather = (lat, lon) => {
// 	const API = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=7&units=I&key=${process.env.WEATHER_API_KEY}`
// 	const weatherInfo = axios.get(API).catch((err) => console.log('Error: something went wrong from getWeather at server', err))
// 	return weatherInfo
// }

class Forecast {
	constructor(chosenCity) {
		this.date = chosenCity.valid_date;
		this.description = `The median temperature for ${chosenCity.valid_date} is going to be ${chosenCity.temp} with a high of ${chosenCity.high_temp} and a low of ${chosenCity.low_temp}, but could feel anywhere between ${chosenCity.app_min_temp} and ${chosenCity.app_max_temp} with ${chosenCity.weather.description.toLowerCase()}`;
	}
}

const pushForecast = (chosenCity) => {
	const forecastArr = []
	chosenCity.map(day => forecastArr.push(new Forecast(day)))

	return forecastArr
}

module.exports = { Forecast, getWeather, pushForecast};