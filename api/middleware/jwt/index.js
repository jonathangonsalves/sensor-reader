const jwt = require("jsonwebtoken");

const SECRET = 'snake'
module.exports.jwt_create = function(login, password){
	return new Promise(function(resolve, reject){
		// Token de 1 hora
		var token = jwt.sign({login, password, exp: Math.floor(Date.now() / 1000) + (60 * 60)},SECRET);
		resolve(token);
	});
}

module.exports.verify_login = function(req, res, next){
console.log(req);	
	var token = req.body.token;
	if(!token){
		next(401);
	}else{
		try{
			var decoded = jwt.verify(token, SECRET);
			next();
		}catch(err){
			next(401);
		}

	}

}
