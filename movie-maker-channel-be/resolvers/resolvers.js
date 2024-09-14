
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

// Answer Schema
const resolvers = { 
    // When being reached out, it will return a listMovies array/list, which contains of many Movie objects, each contain 3 fields: name, genre and year 
    listMovies: () => {
        return movies;
    }, 
    hello: () => "Hello World",
    addMovie: (args) => {
        return {
            // When ask for addMovie, return the name of added movie.
            name: args.name, 
            genre: args.genre, 
            year: args.year
        } 
    }
};

// graphql({ schema, source, rootValue }).then(response => {
//     console.log(response)
// })

module.exports = resolvers;