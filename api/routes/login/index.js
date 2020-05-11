const path = require('path');
const fs = require('fs');
const express = require('express');

const { valid_login } = require('./middleware.js');

module.exports = function () {
    var router = express.Router();

    router.post("/", valid_login);

    return router;
}
