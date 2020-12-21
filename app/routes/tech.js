'use strict'
module.exports = function (app) {
    app.get('/tech', function (req, res) {
        res.render("tech/tech");
    });
};