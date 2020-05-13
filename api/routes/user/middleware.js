const path = require('path');
const fs = require('fs');
const { insert } = require('../../db/querys/insert');
const { select_email, selectAll} = require('../../db/querys/select');

const send_email = require('../../tools/email');

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

    var stats = await insert(nome, email, password);
    if(stats == 'ok'){
        res.redirect('/user/register/su?t=' + req.body.token);
    }else{
        res.redirect('/user/register/err?t=' + req.body.token);
    }
}

module.exports.send_recoverpage = function(req, res){
    res.sendFile(path.join(__dirname, '../../public/views/recuperar_senha.html'));
}

module.exports.recover = async function(req, res){
    var email = req.body.email;

    var user = await select_email(email);
    var msg = "";
    if (user.status) {
        msg += "Sua senha: " + user.data.password;
    } else {
        msg += "Desculpe não encontramos o seu email em nossos registros";        
    }

    send_email(email, msg);

    res.redirect('/');
}