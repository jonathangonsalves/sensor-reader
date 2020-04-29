const express = require('express');
const { user_all, 
		user_add, 
		register_page } = require('./middleware');

module.exports = function () {
	var router = express.Router();

	router.get('/all', user_all);

	router.get('/register', register_page);

	router.post('/register', user_add);

	return router;
}