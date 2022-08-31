const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const home = require('./routes/homeRoute')
const weather = require('./routes/weatherRoute')
const movie = require('./routes/movieRoute')
const yelp = require('./routes/yelpRoute')

app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(cors());

app.use(home)
app.use(weather)
app.use(movie)
app.use(yelp)

app.listen(process.env.PORT, () => {
	console.log('Server is up and running');
})