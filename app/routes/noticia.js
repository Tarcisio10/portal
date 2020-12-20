'use strict'
module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        res.render("noticias/noticia");
        //res.send("<html><body>Moda</body></html>"); 
    });
};