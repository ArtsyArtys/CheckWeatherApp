const router = require('express').Router()
const axios = require('axios')
module.exports = router


// autocomplete example:
// frontend GET /api/location/autocomplete?input=Chica
// fetch query GET /locations/v1/cities/autocomplete?apikey=process.env.ACCUWEATHER_API_KEY&q=United%20S

// router.get('/autocomplete', async (req, res, next) => {
//   try {
//     const {data} = await axios.get(
//       `${req.datacenter}/locations/v1/cities/autocomplete`,
//     {
//       params: {
//         apikey: process.env.ACCUWEATHER_API_KEY,
//         q: req.query.input
//       }
//     })
//     console.log("data", data)
//
//    TODO: check react country code dropdown and object format for filtering based on country
//    or frontend query interpolation based on comma delimiting country code without dropdown
//
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// by city example (with country code):
// frontend GET /api/location/city/US?Chicago, IL
// fetch query GET /locations/v1/cities/US/search?apikey=process.env.ACCUWEATHER_API_KEY&q=Chicago%2C%20IL

router.get('/city/:countryCode', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `${req.datacenter}/locations/v1/cities/${req.params.countryCode}/search`,
      {
        params: {
          apikey: process.env.ACCUWEATHER_API_KEY,
          q: req.query.input
        }
      })
      res.json(data[0].Key)
  } catch (err) {
    next(err)
  }
})

// by postal code example (with country code):
// frontend GET /api/location/postalCode/US?input=60175
// fetch query GET /locations/v1/postalcodes/US/search?apikey=process.env.ACCUWEATHER_API_KEY&q=60175

router.get('/postalCode/:countryCode', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `${req.datacenter}/locations/v1/postalcodes/${req.params.countryCode}/search`,
      {
        params: {
          apikey: process.env.ACCUWEATHER_API_KEY,
          q: req.query.input
        }
      }
    )
    res.json(data[0].Key)
  } catch (err) {
    next(err)
  }
})

// by IP Address => should be checked first
// frontend GET /api/location
// fetch query GET /locations/v1/cities/ipaddress?apikey=process.env.ACCUWEATHER_API_KEY&q=127.0.0.1

router.get('/', async (req, res, next) => {
  try {
    if (req.ip === '::1') {
      req.ipAddress = process.env.MY_IP_ADDRESS  // your local ip address for running in dev mode
      // return res.status(403).send('Currently working on localhost, need to send public ip address to deployed server')
    }
    else { req.ipAddress = req.ip }
    const {data} = await axios.get(`${req.datacenter}/locations/v1/cities/ipaddress`,
    {
      params: {
        apikey: process.env.ACCUWEATHER_API_KEY,
        q: req.ipAddress
      }
    })
    res.json(data.Key)
  } catch (err) {
    next(err)
  }
})
