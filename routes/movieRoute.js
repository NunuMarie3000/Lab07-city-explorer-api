const express = require('express')
const router = express.Router()
const movie = require('../movie');
const setCache = require('./cache')

router.get('/movie', setCache(), async (req, res)=>{
	const getMovie = movie.getMovie
	const pushMovies = movie.pushMovies
  const { city } = req.query
	try {
		const chosenCity_Movie = await getMovie(city) //this is working
		const results = pushMovies(chosenCity_Movie.data)
		res.send(results)
	} catch (error) {
		res.status(500).send(error)
	}
})


module.exports = router