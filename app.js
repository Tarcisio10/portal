'use strict'
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    //res.send Trabalhando com express
    //res.render Ejs junto com express permigindo código .js
    res.render("secao/home");
});
app.get('/noticia', function(req,res){
    res.render('secao/noticia')
    //res.send("<html><body>Moda</body></html>"); 
});
app.get('/tech', function(req,res){
    res.render("secao/tech");
});

app.listen(3000, function(){
    console.log("Servidor rodando com express")
});

