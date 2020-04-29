const path = require('path');
const fs = require('fs');
const {select}  = require('../../db/querys/select');

module.exports.valid_login = async function(req, res){

	console.log(req.body);
	
	var user = await select(req.body.login, req.body.password);
	
	if(user.status){
		if(user.data.role == 0){
			res.sendFile(path.join(__dirname, '../../public/views/dashboard_adm.html'));
		}else{
			res.sendFile(path.join(__dirname, '../../public/views/dashboard.html'));
		}
	}else{
		res.sendStatus(404);
	}

}
    
