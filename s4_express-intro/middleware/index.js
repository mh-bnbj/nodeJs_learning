const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req,res,next)=>{
    req.massage = 'parameter send to other middlewares'
    next()
})


app.use((req,res,next)=>{
    console.log('middleware2 massage:' , req.massage)
    next()
})


// READ
app.get('/', (req, res) => {
  res.send('Hello world !!!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})