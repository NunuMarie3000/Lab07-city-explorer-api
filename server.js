const express = require('express')
const app = express();
const cors = require('cors')

const Forecast = require('./forecast')
const data = require('./data/weather.json')
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

app.get('/weather', (req, res) => {
	//the url will look like: /city/?city=london&lat=83&lon=7
	//this is an object that contains the city, lat, and lon

	const { city, lat, lon } = req.query

	const chosenCity = data.find((obj) => {
		return obj.city_name.toLowerCase() === city.toLowerCase()
	})
	if (!chosenCity) { res.status(500).send({ error: "Something went wrong" }) }
	//in the future, i'll have to search by lat and lon instead of city name when i actually connect to locationIQ

	let forecastArr = []

	const dayOne = new Forecast(chosenCity, 0)
	const dayTwo = new Forecast(chosenCity, 1)
	const dayThree = new Forecast(chosenCity, 2)
	forecastArr.push(dayOne, dayTwo, dayThree)
	res.send({ data: forecastArr })
	// res.send("You've reached the weather api endpoint!")
})


app.post('/city', (req, res) => {
	try {
		console.log(req.body.city)
		res.send('recieved your request!')
	} catch (error) {
		res.status(500).send({error: 'something went wrong'})
	}
})

app.listen(process.env.PORT || 5000, () => {
	console.log('Server is up and running');
})