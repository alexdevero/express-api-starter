var express = require('express')

var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ message: 'There will be dragons, bot users.'})
})

module.exports = router
