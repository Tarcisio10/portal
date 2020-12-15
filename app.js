'use strict'
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    //res.send Trabalhando com express
    res.send("<html><body>Portal de noticias</body></html>");
});
app.get('/moda', function(req,res){
    res.send("<html><body>Moda</body></html>");
});
app.get('/tech', function(req,res){
    res.send("<html><body>Tecnologia</body></html>");
});

app.listen(3000, function(){
    console.log("Servidor rodando com express")
});

