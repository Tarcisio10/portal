'use strict'
//var dbConnection = require('../../config/dbConnection'); removeu o require com uso do consign
module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);//Acessa o model de noticias/models

        NoticiasDAO.getNoticias( function (error, result) {//'getNoticias'Recupera as noticias,callback com a consulta
            res.render("noticias/noticias", { noticias: result });
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};