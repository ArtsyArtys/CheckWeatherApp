const router = require('express').Router()
module.exports = router


// autocomplete example:
// GET /locations/v1/cities/autocomplete?apikey=process.env.ACCUWEATHER_API_KEY&q=United%20S

// by city example (with country code):
// GET /locations/v1/cities/US/search?apikey=process.env.ACCUWEATHER_API_KEY&q=Chicago%2C%20IL

// by postal code example (with country code):
// GET /locations/v1/postalcodes/US/search?apikey=process.env.ACCUWEATHER_API_KEY&q=60175
