const path = require('path');
const fs = require('fs');
const { insert } = require('../../db/querys/insert');
const { select, selectAll} = require('../../db/querys/select');

module.exports.register_page = function(req, res){
    res.sendFile(path.join(__dirname, '../../public/views/cadastro.html'));
}

module.exports.user_all = async function(req, res){
    var users = await selectAll();
    res.send(users);
}

module.exports.user_add = async function(req, res){
    res.send(200);
}