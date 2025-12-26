const express = require('express');
const helloRouter = require('./routes/auth');  
const mongoose = require('mongoose');

//port no
const PORT = 3000;



const app = express();


const mongoUri = "mongodb+srv://clutchlessman:megapass@clutchlesscluster.mfnbpqt.mongodb.net/?appName=ClutchlessCluster";


// middleware to parse JSON
app.use(helloRouter);

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