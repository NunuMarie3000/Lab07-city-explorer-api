const express = require('express')
const router = express.Router()
const weather = require('../funcs/forecast')
const getWeather = weather.getWeather
const pushForecast = weather.pushForecast
// const setCache = require('./cache')

router.get('/weather', async (req, res) => {
	// const Forecast = weather.Forecast
	//the url will look like: /weather/?lat=83&lon=7
	try {
		const { lat, lon } = req.query
		const chosenCity = await getWeather(lat, lon)
		const results = pushForecast(chosenCity.data.data)
		// console.log(results)
		res.send(results)
		// res.send('hello')
	} catch (error) {
		res.status(500).send(error)
	}
})

module.exports = router


