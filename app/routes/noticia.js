'use strict'
module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function (error, result) {
            res.render("noticias/noticia", { noticia: result });//passando a view p/ renderizar em Json com código Js
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};