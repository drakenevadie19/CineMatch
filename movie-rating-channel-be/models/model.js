const mongoose = require('mongoose');

// Schema = a predefined format or a pattern just like we have with the queries
// Arguments are data that we want to provide to store in the schema
// const mongoSchema = new mongoose.Schema({ 
//     name: String, 
//     genre: String, 
//     year: String
// });

// Create a model with schema we provided with name 'MongoMovieModel'
//  => Everything upload to DB will follow this schema
// module.exports = new mongoose.model('MongoMovieModel', mongoSchema);

// Schema = a predefined format or a pattern just like we have with the queries
const mongoSchema = new mongoose.Schema({ 
    // Arguments are data that we want to provide to store in the schema
    _id: mongoose.Schema.Types.ObjectId,  // Explicitly include _id as ObjectId
    id: String,
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
    rates: {
        metaScore: String,
        imdbRating: String,
        imdbVotes: String,
        // rottenTomatoes: null,
    }
});

// Create a model with schema we provided with name 'MongoMovieModel'
//  => Everything upload to DB will follow this schema
module.exports = new mongoose.model('MongoMovieListModel', mongoSchema);