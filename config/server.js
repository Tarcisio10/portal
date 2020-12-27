'use strict'
var express = require('express');
var consign = require('consign');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()//carrega no autoload
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);


module.exports = app;
