'use strict'
var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {

    var connection = dbConnection();

    app.get('/noticias', function (req, res) {


        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias: result });//passando a view p/ renderizar em Json com código Js
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};