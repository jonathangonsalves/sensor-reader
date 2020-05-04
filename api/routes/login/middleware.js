const path = require('path');
const fs = require('fs');
const {select}  = require('../../db/querys/select');
const auth = require("../../auth");

module.exports.valid_login = async function(req, res){

	console.log(req.body);
	
	var user = await select(req.body.login, req.body.password);
	
	if(user.status){
		res.body = {};
		var data = {
			login: req.body.login,
			role: user.data.role
		};
		
		var token =  await auth.createToken(data);

		res.redirect('/dashboard?t=' + token);

	}else{
		res.sendFile(path.join(__dirname, '../../public/views/login_err.html'));
	}

}
    
