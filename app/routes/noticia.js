'use strict'
module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('select * from noticias where id_noticia = 2 ', function (error, result) {
            res.render("noticias/noticia", { noticia: result });//passando a view p/ renderizar em Json com código Js
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};