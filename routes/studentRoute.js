const express = require('express');
const student_controller = require('../controllers/studentController');
const { verifyAccessToken } = require('../helpers/jwtHelper');


// routes to setup our routes
const routes = express.Router();
// retrieve all students
routes.get("/retrievestudents", student_controller.retrievestudents);

routes.get('/retrievestudent/:id', student_controller.retrievestudentsById);

// add student to the DB
routes.post('/addstudent', student_controller.addstudent);

// update students in the DB
routes.patch('/updatestudent/:id', student_controller.updatestudent);


// delete a student from the DB
routes.delete('/deletestudent/:id', student_controller.deletestudent);

module.exports = routes;