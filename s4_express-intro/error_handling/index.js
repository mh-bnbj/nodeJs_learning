const express = require('express')
const router = require('./route/index')

const app =  express()
const PORT = 3000

app.use('/' , router)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT , ()=>{
    console.log(`App is running on ${PORT}`)
})