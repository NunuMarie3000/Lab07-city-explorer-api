const express = require('express')
const router = express.Router()
const weather = require('../forecast')

router.get('/weather', async (req, res) => {
	const getWeather = weather.getWeather
	const Forecast = weather.Forecast
	//the url will look like: /weather/?lat=83&lon=7
	try {
		const { lat, lon } = req.query
		const chosenCity = await getWeather(lat, lon)
		const forecast = new Forecast(chosenCity.data.data[0])
		res.send(forecast)
	} catch (error) {
		res.status(500).send(error)
	}
})

module.exports = router