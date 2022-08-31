const express = require('express')
const router = express.Router()
const movie = require('../funcs/movie');
const getMovie = movie.getMovie
const pushMovies = movie.pushMovies
// const setCache = require('./cache')

router.get('/movie', async (req, res)=>{
	try {
		const { city } = req.query
		const chosenCity_Movie = await getMovie(city)
		const results = pushMovies(chosenCity_Movie.data)
		res.send(results)
	} catch (error) {
		res.status(500).send(error)
	}
})


module.exports = router