'use strict'
//var dbConnection = require('../../config/dbConnection'); removeu o require com uso do consign
module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias: result });//passando a view p/ renderizar em Json com código Js
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};