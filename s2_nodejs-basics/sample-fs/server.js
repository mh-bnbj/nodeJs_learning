const http = require('http');
const fs = require("fs");
const readHtml = require("./readHtml");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , "text/html");

    // fs.readFile('./mainpage.html' , (err,data)=>{
    //     if(err) return;
    //     res.end(data);
    // })

    const html = readHtml("./mainpage.html");
    res.end(html);

})

server.listen(port , hostname ,()=>{
    console.log("server is running");
})