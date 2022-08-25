const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const Forecast = require('./forecast')
// const data = require('./data/weather.json') //this is gonna turn into data from api?
const getWeather = require('./realWeather')
// const errorFunc = require('./error')

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
	try {
		res.send('Homepage')
	} catch (error) {
		res.status(500).send({error: 'something went wrong'})
	}
})

app.get('/weather', async (req, res) => {
	//the url will look like: /city/?city=london&lat=83&lon=7
	//this is an object that contains the city, lat, and lon

	const { lat, lon } = req.query

	// don't think i need this, my function is only gonna return one city, so i don't need to find anything?
	// const chosenCity = data.find((obj) => {
	// 	// return obj.city_name.toLowerCase() === city.toLowerCase()
	// 	return obj.lat == lat && obj.lon == lon // this will work eventually, but the lat and lon is different in the dummy data than it is in the locationIQ data
	// })
	const chosenCity = await getWeather(lat, lon)
	if (!chosenCity) { res.status(500).send({ error: "Something went wrong from chosenCity" }) }

	// let forecastArr = [] 

	const forecast = new Forecast(chosenCity.data.data[0])
	// const dayOne = new Forecast(chosenCity, 0)
	// const dayTwo = new Forecast(chosenCity, 1)
	// const dayThree = new Forecast(chosenCity, 2)
	// forecastArr.push(dayOne, dayTwo, dayThree)
	res.send({data: forecast})
})


app.post('/city', (req, res) => {
	try {
		console.log(req.body.city)
		res.send('recieved your request!')
	} catch (error) {
		res.status(500).send({error: 'something went wrong'})
	}
})

app.listen(process.env.PORT, () => {
	console.log('Server is up and running');
})