const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = [{name:"mohamad" , age:24 , id:1}]

// READ
app.get('/', (req, res) => {
  res.send(`users number = ${users.length}`)
})

// READ
app.get('/user', (req, res) => {
    // res.send(users)
    res.json(users)
})

// CREATE
app.post('/user', (req, res) => {
    console.log("req body" , req.body)
    users.push(req.body)
    res.send(`User Number : ${users.length}`)
})

//update and replace
app.patch('/user', (req, res) => {
    users.filter((user)=>{
        return user.id == req.body.id
    }).forEach(user => {
        user.name = req.body.name
        user.age = req.body.age
    });
    res.send(`User Number : ${users.length}`)
})

//update and modify
app.put('/user/:id', (req, res) => {
    users.filter((user)=>{
        return user.id == req.params.id
    }).forEach(user => {
        user.name = req.body.name
        user.age = req.body.age
    });
    res.send(`User Number : ${users.length}`)
})

// delet
app.delete('/user', (req, res) => {
    
    users.forEach((user , index) => {
        if(user.id == req.body.id){
            console.log("user" , user)
            console.log("index" , index)
            users.splice(index , 1);
        }
    });

    res.send(`User Number : ${users.length}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})