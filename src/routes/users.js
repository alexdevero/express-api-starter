const express = require('express')

const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ message: 'There will be dragons, not users.' })
})

module.exports = router
