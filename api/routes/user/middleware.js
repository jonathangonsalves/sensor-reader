const path = require('path');
const fs = require('fs');
const { insert } = require('../../db/querys/insert');
const { select, selectAll} = require('../../db/querys/select');

module.exports.register_page = function(req, res){
    res.sendFile(path.join(__dirname, '../../public/views/cadastro.html'));
}

module.exports.register_page_su = function(req, res){
    res.sendFile(path.join(__dirname, '../../public/views/cadastro_su.html'));
}

module.exports.register_page_err = function(req, res){
    res.sendFile(path.join(__dirname, '../../public/views/cadastro_err.html'));
}

module.exports.user_all = async function(req, res){
    var users = await selectAll();
    res.send(users);
}

module.exports.user_add = async function(req, res){
    var {nome, email, password} = req.body;
    console.log(req.body)

    var stats = await insert(nome, email, password);
    if(stats == 'ok'){
        res.redirect('/user/register/su?t=' + req.body.token);
    }else{
        res.redirect('/user/register/err?t=' + req.body.token);
    }
}