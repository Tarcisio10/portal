'use strict'
module.exports = function (application) {
    application.get('/admin', function (req, res) {
        res.render("admin/form_add_noticia");
    });
    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;//Acessa o model de noticias/models

        noticiasModel.salvarNoticia(noticia, connection, function (error, result) {//'getNoticias'Recupera as noticias,callback com a consulta
            res.redirect("/noticias");
        });
    });
};