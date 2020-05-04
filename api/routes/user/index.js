const express = require('express');
const auth = require("../../auth");
const { user_all, 
		user_add, 
		register_page,
		register_page_su,
		register_page_err} = require('./middleware');

module.exports = function () {
	var router = express.Router();

	router.get('/all', auth.authToken, user_all);

	router.get('/register', auth.authToken, register_page);

	router.get('/register/err', auth.authToken, register_page_err);
	
	router.get('/register/su', auth.authToken, register_page_su);
	
	router.post('/register', auth.authToken, user_add);

	return router;
}
