var { buildSchema } = require("graphql")

// Old Schema for GraphQL
// const schema = buildSchema(`
//     type Query {
//         listMovies: [Movie]
//     }  
 
//     type Mutation {
//         addMovie(name: String!, genre: String!, year: String!): Movie 
//     }

//     type Movie {
//         name: String, 
//         genre: String, 
//         year: String
//     }
// `)

const schema = buildSchema(`
    type Query {
        listMovies: [Movie]
        getMovie(movieTitle: String!): Movie
    }    

    type Movie {
        _id: String,
        title: String,
        year: String,
        rated: String,
        released: String,
        runtime: String,
        genre: String,
        director: String,
        writer: String,
        actors: String,
        plot: String,
        language: String,
        country: String,
        awards: String,
        poster: String,
        type: String,
        images: [String],
        rates: Rates
    }

    type Rates {
        metaScore: String,
        imdbRating: String,
        imdbVotes: String
    }
`)

module.exports = schema;