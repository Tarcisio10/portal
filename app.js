'use strict'
var app = require('./config/server'); // ... = require('./') Parte do mesmo nivel do diretório

//var rotaHome = require('./app/routes/home')(app);
//var rotaForm = require('./app/routes/form_add_noticia')(app);
//var rotaAdmin = require('./app/routes/admin')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaTech = require('./app/routes/tech')(app);

app.listen(3009, function () {
    console.log("Servidor ON")
});

