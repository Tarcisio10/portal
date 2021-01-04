'use strict'
module.exports = function (application) {
    application.get('/admin', function (req, res) {
        res.render("admin/form_add_noticia");
    });
    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);//Acessa o model de noticias/models

        NoticiasDAO.salvarNoticia(noticia, function (error, result) {//'getNoticias'Recupera as noticias,callback com a consulta
            res.redirect("/noticias");
        });
    });
};