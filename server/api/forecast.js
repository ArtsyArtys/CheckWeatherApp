const router = require('express').Router()
const axios = require('axios')
const NodeCache = require('node-cache')
const myCache = new NodeCache
module.exports = router

// example by location key:
// frontend query: GET /api/forecast/348308
// fetch query: GET /forecasts/v1/daily/5day/{locationKey}?apikey=process.env.ACCUWEATHER_API_KEY

router.get('/:locationKey', async (req, res, next) => {
  try {
    const cachedData = myCache.get(req.params.locationKey)
    // TODO: Check using Redis or external database for more reliable caching
    // and frontend localstorage to remove potential server-drop issues 
    if (cachedData) {
      console.log(cachedData);
      return res.json(cachedData)
    }
    else {
      const {data} = await axios.get(`${req.datacenter}/forecasts/v1/daily/5day/${req.params.locationKey}`,
        {
          params: {
            apikey: process.env.ACCUWEATHER_API_KEY
          }
        })
        const arr = []
        data.DailyForecasts.forEach((val, idx) => { if (idx < 3) { arr.push(val)} })
        console.log("Forecast data", arr)
        myCache.set(req.params.locationKey, arr, 3600000)
        return res.json(arr)
    }
  } catch (err) {
    next(err)
  }
})
