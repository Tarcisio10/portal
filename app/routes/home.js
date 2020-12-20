'use strict'
module.exports = function (app) {
    app.get('/', function (req, res) {
        //res.send Trabalhando com express
        //res.render Ejs junto com express pertindoindo código .js
        res.render("home/index");
    });
};