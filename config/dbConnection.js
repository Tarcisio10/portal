'use strict'
var mysql = require('mysql');

var connMySQL = function () {
    console.log('conexao com o banco ON');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('O autoload carregou o modulo de conexão com o bd');
    return connMySQL;
};