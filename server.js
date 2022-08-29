const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const weather = require('./forecast')
const movie = require('./movie');

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

app.get('/movie', async (req, res)=>{
	const getMovie = movie.getMovie
	const pushMovies = movie.pushMovies
	try {
		const { city } = req.query
		const chosenCity_Movie = await getMovie(city)
		const results = pushMovies(chosenCity_Movie.data)
		res.send(results)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.listen(process.env.PORT, () => {
	console.log('Server is up and running');
})