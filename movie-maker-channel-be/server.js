const express = require('express');
const app = express();

const mongoose = require("mongoose");

const { graphqlHTTP } = require('express-graphql');

var { buildSchema } = require("graphql")

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

const movies = [
    {
        name: 'Home Alone 1',
        genre: 'Funny',
        year: '1990'
    },
    {
        name: 'Home Alone 2',
        genre: 'Funny',
        year: '1992'
    },
    {
        name: 'Home Alone 3',
        genre: 'Funny',
        year: '1997'
    },
    {
        name: 'Home Alone 4',
        genre: 'Funny',
        year: '2002'
    }
]

var schema = buildSchema(`
    type Query {
        listmovie: [Movie]
    }

    type Movie {
        name: String, 
        genre: String, 
        year: String
    }
`)

var rootValue = { 
    listmovie: () => {
        return movies;
    }, 
    hello: () => "Hello World"
};

// graphql({ schema, source, rootValue }).then(response => {
//     console.log(response)
// })

app.use('/hello', graphqlHTTP({
    schema, 
    rootValue,
    graphiql: true
}))

// When server run on port, it can listen
app.listen('8000', () => {
    console.log('Server is running on port 8000');
})