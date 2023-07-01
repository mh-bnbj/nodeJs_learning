const express = require('express')
const app = express()
const port = 3000


const MW_setUsername = (req , res , next)=>{
    req.username = 'mohamad'
    next()
}

const MW_setPassword = (req,res,next)=>{
    req.password = '1234'
    next()
}

// READ
app.get('/' , MW_setUsername , MW_setPassword , express.json() ,  (req, res) => {
  res.send(req.username + " : " + req.password)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})