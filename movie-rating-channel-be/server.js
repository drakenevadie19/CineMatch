const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require("mongoose");

const path = require("path");

const { graphqlHTTP } = require('express-graphql');

const movieResolvers = require('./resolvers/resolvers')
const movieSchema = require('./schema/schema');

const cors = require('cors');

// Connect BE to MongoDB Atlas DB
// No need useNewURLParser and useUnifiedTopology parameters, because they are deprecated.
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@movie-maker-app.9l1xvlj.mongodb.net/?retryWrites=true&w=majority&appName=movie-maker-app`)
    .then(() => {
        console.log("Successfully connect to MongoDB");
    })
    .catch((err) => {
        console.log('Error:', err);  
    });

app.get('/hi', (req, res) => {
    res.send('Hello from express server');
});

// Allow cross-origin communication
app.use(cors());

app.use('/getAllMovies', graphqlHTTP({
    schema: movieSchema, // Format of question and answer
    rootValue : movieResolvers, // Answer response from server  
    graphiql: true // Check the queries over API
}))

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "public/build")));

// Catch-all route to serve React app for any other request
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build", "index.html"));
});

// When server run on port, it can listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});