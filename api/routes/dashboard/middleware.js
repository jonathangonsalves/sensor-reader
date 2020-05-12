const path = require("path");
const fs = require('fs');

module.exports.send_dashpage = function(req, res){
    if (req.body.decoded.role == 0)
        res.sendFile(path.join(__dirname, '../../public/views/dashboard_adm.html'));
    else
        res.sendFile(path.join(__dirname, '../../public/views/dashboard.html'));
}

module.exports.read_data = async function(req, res, next){
     try{
        var filePath = path.join(__dirname, '../../../reader/final.json');
        var fileData = await fs.readFileSync( filePath, 'utf8');
        req.body.nData = JSON.parse(fileData);
        next();
    }catch(err){
        console.log(err);
        next(err);
    }   
}

module.exports.parse_data = async function(req, res, next){
    var data = {
        s1:{
            values: [],
            time: []
        },
        s2: {
            values: [],
            time: []
        },
    };

    var temV = (req.body.nData);
    for (let i in (temV["sensor_one"])){
        data.s1.values.push(parseInt(temV["sensor_one"][i]));
        data.s1.time.push(i)
    }

    for (let i in (temV["sensor_two"])) {
        data.s2.values.push(parseInt(temV["sensor_two"][i]));
        data.s2.time.push(i)
    }

    req.body.data = data;
    next()
}

module.exports.send_data = async function(req, res){
    var fileData = req.body.data;
    res.send(fileData);
}