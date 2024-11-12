// import mongoose 
const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname:{
        type:String,
        required:[true,'Firstname is required']
    },
    lastname:{
        type:String,
        required:[true,'Lastname is required']
    },
    gender:{
        type:String,
    },
    // course:{
    //     type:String,
    //     required:[true, 'Course is required']
    // }

});
// Create a model that is going to represent our collection in the DB
const Student = mongoose.model('student', studentSchema);
 
// here we are exporting this file so that we can use it in other files
module.exports = Student;