const express = require('express')
const router = require('./routes')
const errorHandler = require('./helpers/errorHandler')
const morgan = require('morgan')

const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const PORT = 3000

// add passport codes
require('./helpers/passport')

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))

app.use(express.json())
// for parse request body that forms
app.use(express.urlencoded())

app.use(cookieParser())
app.use(session({ secret: 'keyboard cat asd' }))
app.use(flash())

app.use('/', router)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})
