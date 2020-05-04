const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET = 'segredo123456789@';

module.exports.createToken = async function(data){
    var token = await jwt.sign(data, SECRET, {expiresIn: '1h'});
    return token;
}

module.exports.authToken = async function(req, res, next){
    var token = req.body.token || req.query.t;
    if(!token){
        res.status(401).json({status: 401, msg: "Acesso não autorizado"});
    }else{
        jwt.verify(token,  SECRET, function(err, decoded){
            if(err){
                console.log(err);
                res.status(401).json({status: 401, msg: "Acesso não autorizado"});
            }else{
                req.body.decoded = decoded;
                req.body.token = token;
                next();
            }
        });
    }


}

