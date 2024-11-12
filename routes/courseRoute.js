const express = require('express');
const course_controller = require('../controllers/courseController');

// Create a router 
const routes = express.Router();

// Retrieve all courses
routes.get("/retrievecourses", course_controller.retrievecourses);

// Add a new course to the database
routes.post('/addcourse', course_controller.addcourse);

// Update a course in the database
routes.patch('/updatecourse/:id', course_controller.updatecourse);

// Delete a course from the database
routes.delete('/deletecourse/:id', course_controller.deletecourse);

module.exports = routes;
