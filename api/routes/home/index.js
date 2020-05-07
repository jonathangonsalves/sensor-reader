const express = require('express');

const { send_homepage } = require('./middleware');

module.exports = function () {
    var router = express.Router();

    router.get("/", send_homepage);

    return router;
}