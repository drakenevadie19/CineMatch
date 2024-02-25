const express = require('express');
const app = express();

const mongoose = require("mongoose");

const { graphqllHTTP } = require('graphql-http');

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
    });

var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
    type Query {
        hello: String
    }
`)

var rootValue = { hello: () => "Hello world!" }

var source = "{ hello }"

graphql({ schema, source, rootValue }).then(response => {
    console.log(response)
})

// app.get('/graphql')

// When server run on port, it can listen
app.listen('8000', () => {
    console.log('Server is running on port 8000');
})