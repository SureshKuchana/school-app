var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var weekRouter = require('./routes/lunch-week')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

let router = express.Router()

router.use('/', indexRouter)
router.use('/users', usersRouter)
router.use('/lunch-week', weekRouter)

app.use('/api', router)

console.log(`Server running on http://localhost:3000`)

module.exports = app
