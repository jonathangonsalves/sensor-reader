const express = require("express");
const home = require("./home");
const login = require('./login');
const user = require('./user');

module.exports = function () {
    var router = express.Router();

    router.use('/', home());
    router.use('/login', login());
	router.use('/user',user());

    return router;

}