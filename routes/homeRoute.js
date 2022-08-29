const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	try {
		res.send('Homepage')
	} catch (error) {
		res.status(500).send(error)
	}
})
module.exports = router