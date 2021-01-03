'use strict'
module.exports = function (app) {
    app.get('/admin', function (req, res) {
        res.render("admin/form_add_noticia");
    });
    app.post('/noticias/salvar', function (req, res) {
        var noticias = req.body;
        res.send(noticias);
    });
};