const path = require('path');
const fs = require('fs');
const express = require('express');


const auth = require('../../auth');

module.exports = function(){
    var router = express.Router();

    router.get('/', auth.authToken, function(req, res){
        if (req.body.decoded.role == 0)
            res.sendFile(path.join(__dirname, '../../public/views/dashboard_adm.html'));
        else
            res.sendFile(path.join(__dirname, '../../public/views/dashboard.html'));
    });


    return router;

}