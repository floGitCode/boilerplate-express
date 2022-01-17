var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var absolutePath = path.join(__dirname, '/views/index.html');
var dirPublic = path.join(__dirname, '/public')
/*console.log("Hello World");*/
app.get((req, res) => {
    res.send("Hello World");
});

app.get('/', (req, res) => {
    res.sendfile(absolutePath)
});

app.use('/public', express.static(dirPublic))




































 module.exports = app;
