// Import mongoose
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

// Schema
const Schema = mongoose.Schema;

// Define the course schema
const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Email name is required'],
    },
   
    password: {
        type: String,
        required: [true, 'Password is required']
    },
   
});

// Hashing the password  before its saved
userSchema.pre("save", async function (next) {
    try {
        
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();

    } catch (error) {
        next('error');
    }
    
});

// Comparing password entered to one in DB
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bycrypt.compare(password, this.password);
    } catch (error) {
        throw error;   
    }
    
}

// Create a model that represents the 'courses' collection in the database
const User = mongoose.model('User', userSchema);

// Export the model to use it in other parts of the application
module.exports = User;