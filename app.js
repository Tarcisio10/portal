'use strict'
var app = require('./config/server'); // ... = require('./') Parte do mesmo nivel do diretório

app.get('/', function (req, res) {
    //res.send Trabalhando com express
    //res.render Ejs junto com express pertindoindo código .js
    res.render("home/index");
});
app.get('/noticia', function (req, res) {
    res.render("noticias/noticia");
    //res.send("<html><body>Moda</body></html>"); 
});
app.get('/admin', function (req, res) {
    res.render("admin/form_add_noticia");
});
app.get('/tech', function (req, res) {
    res.render("secao/tech");
});

app.listen(3000, function () {
    console.log("Servidor On")
});

