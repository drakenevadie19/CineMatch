var { buildSchema } = require("graphql")

const schema = buildSchema(`
    type Query {
        listmovie: [Movie]
    }

    type Mutation {
        addMovie(name: String!, genre: String!, year: String!): Movie 
    }

    type Movie {
        name: String, 
        genre: String, 
        year: String
    }
`)

module.exports = schema;