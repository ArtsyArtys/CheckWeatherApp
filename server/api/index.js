const router = require('express').Router()
module.exports = router

router.use(() => {
  req.datacenter = "http://dataservice.accuweather.com/"
  console.log(req.datacenter)
})
router.use('/location', require('./location'))
router.use('/forecast', require('./forecast'))


// 404 error handling
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
