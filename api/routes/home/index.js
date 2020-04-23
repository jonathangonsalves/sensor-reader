const path = require('path');
const fs = require('fs');
const express = require('express');

module.exports = function () {
    var router = express.Router();

    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, '../../public/views/login.html'));
    });

    return router;
}