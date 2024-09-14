const mongoose = require('mongoose');

// Schema = a predefined format or a pattern just like we have with the queries
const mongoSchema = new mongoose.Schema({ 
    // Arguments are data that we want to provide to store in the schema
    name: String, 
    genre: String, 
    year: String
});

// Create a model with schema we provided with name 'MongoMovieModel'
//  => Everything upload to DB will follow this schema
module.exports = new mongoose.model('MongoMovieModel', mongoSchema);