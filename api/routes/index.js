const express = require("express");
const home = require("./home");
const login = require('./login');

module.exports = function () {
    var router = express.Router();

    router.use('/', home());
    router.use('/login', login());

    return router;

}