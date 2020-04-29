const express = require('express');

const { sned_homepage } = require('./middleware');

module.exports = function () {
    var router = express.Router();

    router.get("/", sned_homepage);

    return router;
}