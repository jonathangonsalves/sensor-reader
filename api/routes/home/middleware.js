const path = require("path");
const fs = require('fs');

module.exports.send_homepage = function(req, res){
    res.sendFile(path.join(__dirname,'../../public/views/login.html' ));
}