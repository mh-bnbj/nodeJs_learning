const express = require('express')
const router = require('./routes')
const errorHandler = require('./helpers/errorHandler')
const morgan = require('morgan')
const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())

app.use('/', router)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
