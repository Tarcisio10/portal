'use strict'
module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias', function (error, result) {
            res.send(result);
        });
        //res.render("noticias/noticias"); Encapsula o banco de dados e retorna a consulta (result);
        //res.send("<html><body>Moda</body></html>"); 
    });
};