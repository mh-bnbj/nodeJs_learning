const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , "text/html");
    fs.readFile('./mainpage.html' , (err,data)=>{
        if(err) return;
        res.end(data);
    })
})

server.listen(port , hostname ,()=>{
    console.log("server is running");
})