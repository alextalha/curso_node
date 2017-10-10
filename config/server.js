var express = require('express');
var app  = express();

app.set('view engine','ejs');
app.set('views', '../app/views' );


module.exports = app;

//var teste = require('../teste.js');

//console.log(teste());
