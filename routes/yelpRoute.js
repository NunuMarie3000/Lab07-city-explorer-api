const express = require('express')
const router = express.Router()
const yelp = require('../funcs/yelpFunc');
const getYelp = yelp.getYelp
const pushYelp = yelp.pushYelp
// const setCache = require('./cache')

router.get('/yelp', async (req, res)=>{
	try {
		const { city } = req.query
		const cityYelp = await getYelp(city)
		const results = pushYelp(cityYelp.data)
		res.send(results)
	} catch (error) {
		res.status(500).send(error)
	}
})


module.exports = router