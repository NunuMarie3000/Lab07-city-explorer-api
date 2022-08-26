const axios = require('axios')

const getMovie = (city) => {
	const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${city}&page=1`

	const movieInfo = axios.get(API).catch((err) => console.log('Error: something went wrong from getMovie at server', err))

	return movieInfo
}

module.exports = getMovie