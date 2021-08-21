var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res) {
  const user = {
    id: 1,
    name: 'Suresh Koochana',
    email: 'kuchana123.suresh@gmail.com',
  }
  res.send(user)
})

module.exports = router
