const express = require('express');
const app = express();

const mongoose = require("mongoose");

app.get('/hi', (req, res) => {
    res.send('Hello from express server');
});

// Connect BE to MongoDB Atlas DB
// No need useNewURLParser and useUnifiedTopology parameters, because they are deprecated.
mongoose.connect("mongodb+srv://thanhnguyen14gers:csz0dMPbQB1HcEF9@movie-maker-app.9l1xvlj.mongodb.net/?retryWrites=true&w=majority&appName=movie-maker-app")
    .then(() => {
        console.log("Successfully connect to MongoDB");
    })
    .catch((err) => {
        console.log('Error:', err);
    })
 


// When server run on port, it can listen
app.listen('8000', () => {
    console.log('Server is running on port 8000');
})