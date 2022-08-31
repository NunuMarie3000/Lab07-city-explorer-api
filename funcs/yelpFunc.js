const axios = require('axios')
const yelpCache = require('../caches/yelpCache')

const getYelp = (city) => {
	const key = 'city-' + city
	const API = `https://api.yelp.com/v3/businesses/search?location=${city}`

	// i wanna delete yelps from cache if its been there longer than 24 hours
	if(yelpCache[key]){
		if(Date.now() - yelpCache[key].timestamp >= 86400000){
			delete yelpCache[key]
		}else{
			console.log('Cache hit');
			return yelpCache[key].data
		}
	}else{
    const config = {
      headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
    }
		const yelpInfo = axios.get(API, config).catch((err) => console.log('Error: something went wrong from getyelp at server', err))
		console.log('Cache miss')
		yelpCache[key] = {}
		yelpCache[key].timestamp = Date.now()
		yelpCache[key].data = yelpInfo
		return yelpInfo
	}
}

class yelpClass {
	constructor(chosen) {
		// this is only gonna give me results for 1 yelp, but i want 20, then i want to return an array of all 20 objects...
		this.id = chosen.id;
		this.name = chosen.name;
		this.image = chosen.image_url;
    this.rating = chosen.rating;
    this.is_closed = chosen.is_closed;
    this.location = chosen.location;
    this.transactions = chosen.transactions;
    this.phone = chosen.phone;
    this.categories = chosen.categories;
	}
}

const pushYelp = (data) => {
	const yelpArr = []
  data.businesses.map(place => yelpArr.push(new yelpClass(place)))
  return yelpArr
}

module.exports = { getYelp, pushYelp }