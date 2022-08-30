const NodeCache = require('node-cache')
const cache = new NodeCache({ checkperiod: 8600 })

const setCache = () => (req, res, next)=>{
  // is request a GET?
  if(req.method !== 'GET'){
    // if not, call next
    console.error('Cannot cache non-GET methods')
    return next()
  }
  const key = req.originalUrl
  // use .get() method on cache to get cached results
  const cachedResponse = cache.get(key)

  // check if key exists in cache
  if(cachedResponse){
    // if it exists, send cache result
    console.log(`Cache hit for ${key}`)
    res.send(cachedResponse)
  }else{
  // if not, replace res.send with method to set response to cache
    console.log(`Cache miss for ${key}`)
    res.originalSend = res.send
    res.send = body =>{
      res.originalSend(body)
      //cache.set accepts a duration, the time it'll cache a result before requesting a new one
      // i'm pretty sure when i initialize cache, if i leave NodeCache() empty, it'll create unlimited ttl, so i need to set a duration when i want everything to delete...
      // stdttl = 0, unlimited
      // checkPeriod, default is 600 seconds used for automatic delete check interval, 10 minutes
      cache.set(key, body)
    }
    next()
  }
}

module.exports = setCache