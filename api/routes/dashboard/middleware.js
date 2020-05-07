const path = require("path");
const fs = require('fs');
require('../../../valores.txt')
module.exports.send_dashpage = function(req, res){
    if (req.body.decoded.role == 0)
        res.sendFile(path.join(__dirname, '../../public/views/dashboard_adm.html'));
    else
        res.sendFile(path.join(__dirname, '../../public/views/dashboard.html'));
}

module.exports.read_data = async function(req, res, next){
     try{
        var fileData = await fs.readFileSync(path.join(__dirname, '../../../valores.txt'), 'utf8');
        req.body.nData = fileData;
        next();
    }catch(err){
        console.log(err);
        next(err);
    }   
}

module.exports.parse_data = async function(req, res, next){
    var data = {
        pot:{
            values: []
        },
        lum: {
            values: []
        }
    };
    var temV = (req.body.nData).split('\n');
    for(let i in temV){
        data.pot.values.push(parseInt(temV[i]));
    }

    req.body.data = data;
    next()
}

module.exports.send_data = async function(req, res){
    var fileData = req.body.data;
    res.send(fileData);
}