const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs'); 
// Define your authentication routes here

// Example route
authRouter.post('/api/signup', async (req, res) => {    
    // Handle user signup
 try {
    const { username, email, password } = req.body;

const existingUser = await User.findOne({ $or: [ { username }, { email } ] });
if (existingUser) {
    return res.status(400).json({ message: 'Username or email already exists' });
}

// Create new user

const salt = await bcrypt.genSalt(12);
const hashedPassword = await bcrypt.hash(password, salt);

const newUser = new User({ username, email, password: hashedPassword });
await newUser.save();

res.status(201).json({ message: 'User created successfully' }); 


 } catch (error) {

    res.status(500).json({ message: 'Server error', error: error.message });
    
 }

});


console.log("Auth routes loaded");

module.exports = authRouter;















module.exports = authRouter;
