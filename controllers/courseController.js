const Course = require('../models/coursemodel');

module.exports = {

    // Add a new course to the database
    addcourse: async (req, res, next) => {
        try {
            const course = new Course(req.body);
            const result = await course.save();
            res.send({ message: "New course added successfully", course: result });
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: "Unable to add course" });
        }
    },

    // Retrieve all courses from the database
    retrievecourses: async (req, res) => {
        try {
            const courses = await Course.find();
            res.send(courses);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: "Unable to retrieve courses" });
        }
    },

    // Update a course by ID
    updatecourse: async (req, res, next) => {
        const id = req.params.id;
        try {
            const update = req.body;
            const options = { new: true }; // Return the updated document
            const result = await Course.findByIdAndUpdate(id, update, options);
            res.send(result);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: "Unable to update course" });
        }
    },

    // Delete a course by ID
    deletecourse: async (req, res, next) => {
        const id = req.params.id;
        try {
            const course = await Course.findByIdAndDelete(id);
            res.send({ message: "Course deleted successfully", course });
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: "Unable to delete course" });
        }
    }
};

