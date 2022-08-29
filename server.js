const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const home = require('./routes/homeRoute')
const weather = require('./routes/weatherRoute')
const movie = require('./routes/movieRoute')

app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(cors());

app.use(home)
app.use(weather)
app.use(movie)

app.listen(process.env.PORT, () => {
	console.log('Server is up and running');
})