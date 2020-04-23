const fs = require('fs');
const path = require('path');

module.exports.insert = async function (name, login, password) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path.join(__dirname, "../usersDB.js"), 'utf8', function (err, data) {
            if (err)
                reject(err);
            data = JSON.parse(data);

            data.push({name, login, password, role: 1});

            fs.writeFile(path.join(__dirname, "../usersDB.js"), JSON.stringify(data), function (err) {
                if (err)
                    reject(err);
                resolve('ok');
            })
        });
    });
}
