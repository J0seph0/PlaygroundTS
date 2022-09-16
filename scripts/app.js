const express = require('express');
const fs = require('fs');
//const fileReader = require('./fileReader');

const app = express();

app.listen(3000);
//this is called whenever there is a request
//app.use();


app.get('/', (req,res) => {
    //res.send(index.html);
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})
app.get('/test', (req,res) => {
    res.sendFile('./views/test.html', { root: __dirname });
})
