const fs = require('fs');
const path = require('path');

module.exports.selectAll = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile(path.join(__dirname, "../usersDB.json"), 'utf8', function (err, data) {
            if (err)
                reject(err);
            resolve(JSON.parse(data));
        });
    });
}

module.exports.select = function (login, password) {
    return new Promise(async function (resolve, reject) {
        fs.readFile(path.join(__dirname, "../usersDB.json"), 'utf8', function (err, data) {
            if (err)
                reject(err);

            let i = 0;

            data = JSON.parse(data);
            var sizeOf = data.length
            
            for (i in data) {
                if (data[i].login == login && data[i].password == password) {
                    resolve({status: true, data: data[i]});
                    break;
                }
            }
            if (i == sizeOf - 1) {
                resolve({ status: false });
            }
        });        
    });
}