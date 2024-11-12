const express = require('express');
// routes to setup our routes
const routes = express.Router();
const User_controller = require('../controllers/userController');


// add student to the DB
routes.post('/register' , User_controller.register);
routes.post('/login' , User_controller.login);


module.exports = routes;