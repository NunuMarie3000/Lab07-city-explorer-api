const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const Forecast = require('./forecast')
// const data = require('./data/weather.json') //this is gonna turn into data from api?
const getWeather = require('./realWeather')
const getMovie = require('./movie');
const pushMovies = require('./pushMovies')

app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
	try {
		res.send('Homepage')
	} catch (error) {
		res.status(500).send(error)
	}
})

app.get('/weather', async (req, res) => {
	//the url will look like: /weather/?lat=83&lon=7
	//this is an object that contains the city, lat, and lon
	try {
		const { lat, lon } = req.query

		const chosenCity = await getWeather(lat, lon)
		if (!chosenCity) { res.status(500).send({ error: "Something went wrong from chosenCity" }) }
		const forecast = new Forecast(chosenCity.data.data[0])
		res.send(forecast)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.get('/movie', async (req, res)=>{
	// how am i gonna get the city to include?
	try {
		const { city } = req.query
		const chosenCity_Movie = await getMovie(city)
		// !chosenCity_Movie &&  res.status(500).send({ error: "Something went wrong from chosenCity_Movie" })
		const results = pushMovies(chosenCity_Movie.data)
		res.send(results)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.listen(process.env.PORT, () => {
	console.log('Server is up and running');
})