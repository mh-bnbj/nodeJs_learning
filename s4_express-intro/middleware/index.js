const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req,res,next)=>{
    console.log('hello')
    // we can end a middleWare by useing next() function or sending a response on res
    // when a middleWare ended , express go to next middleWare to run
})


app.use((req,res,next)=>{
    console.log('world')
    next()
})


// READ
app.get('/', (req, res) => {
  res.send('Hello world !!!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})