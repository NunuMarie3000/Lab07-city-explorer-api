const axios = require('axios')

// const getWeather = (lat, lon) => {
// 	return (req, res, next) => {
// 		const API = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&units=I`

// 		const weatherInfo = axios.get(API).catch((err) => console.log('Error: something went wrong from getWeather at server', err))

// 		req.data = weatherInfo

// 		next();
// 	}
// }
const getWeather = (lat, lon) => {
	const API = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&units=I`

	const weatherInfo = axios.get(API).catch((err) => console.log('Error: something went wrong from getWeather at server', err))

	return weatherInfo
}

module.exports = getWeather