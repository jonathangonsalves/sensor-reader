const path = require('path');
const fs = require('fs');
const express = require('express');
const auth = require('../../auth');

const { send_dashpage,
            read_data,
            parse_data,
            send_data } = require("./middleware");

module.exports = function(){
    var router = express.Router();

    router.get('/', auth.authToken, send_dashpage);

    // Rota nao é necessaria autenticação
    router.get('/data', read_data, parse_data, send_data);


    return router;

}