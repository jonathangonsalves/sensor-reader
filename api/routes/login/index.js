const path = require('path');
const fs = require('fs');
const express = require('express');

const {select}  = require('../../db/querys/select');

module.exports = function () {
    var router = express.Router();

    router.post("/", async function (req, res) {

        console.log(req.body)

        var user = await select(req.body.login, req.body.password);

        if (user.status){
            if (user.data.role == 0) {
                res.send(user.data);
            }else{
                res.sendStatus(200);
            }
        }else{
            res.sendStatus(404);
        }
    });

    return router;
}