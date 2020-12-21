'use strict'
var app = require('./config/server'); // ... = require('./') Parte do mesmo nivel do diretório

var rotaNoticia = require('./app/routes/noticia');
rotaNoticia(app);

var rotaHome = require('./app/routes/home')(app);
var rotaForm = require('./app/routes/form_add_noticia')(app);
var rotaAdmin = require('./app/routes/admin')(app);
var rotaNoticia = require('./app/routes/noticia')(app);
var rotaTech = require('./app/routes/tech')(app);

app.listen(3000, function () {
    console.log("Servidor ON")
});

