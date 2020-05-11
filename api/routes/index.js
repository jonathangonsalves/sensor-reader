const express = require("express");
const home = require("./home");
const login = require('./login');
const user = require('./user');
const dashboard = require('./dashboard');

module.exports = function () {
    var router = express.Router();

    router.use('/', home());
    router.use('/login', login());
    router.use('/user',user());
    router.use('/dashboard', dashboard());

    return router;

}
