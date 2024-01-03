//const http= require('http');

const express = require('express');

const app= express();

app.use( ( req , res , next) => {
    console.log("in the middleware");
    next();// allows the request to continue to next middleware in line
})

app.use( ( req , res , next) => {
    console.log("in the  another middleware");
    res.send('<h1>Hello from Express!</h1>');
})

//const server=http.createServer(app);

app.listen(3000);