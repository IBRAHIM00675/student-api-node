// Import mongoose
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

// Define the course schema
const courseSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Course name is required'],
    },
   
    description: {
        type: String,
    },
   
});

// Create a model that represents the 'courses' collection in the database
const Course = mongoose.model('Course', courseSchema);

// Export the model to use it in other parts of the application
module.exports = Course;
