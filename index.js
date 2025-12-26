const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

//port no
const PORT = 3000;


// Create Express app
const app = express();

// MongoDB connection URI
const mongoUri = "mongodb+srv://clutchlessman:megapass@clutchlesscluster.mfnbpqt.mongodb.net/?appName=ClutchlessCluster";


//json parsing

// middleware to parse JSON
app.use(express.json());

// Use authentication routes
app.use(authRouter);

// Connect to MongoDB
mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});