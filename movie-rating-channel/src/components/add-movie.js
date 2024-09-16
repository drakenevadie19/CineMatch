import React, { useState } from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { gql, useMutation } from '@apollo/client';

const listAllMovies = gql`
    query {
        listMovies {
            _id
            title,
            year,
            rated,
            released,
            runtime,
            genre,
            director,
            writer,
            actors,
            plot,
            language,
            country,
            awards,
            poster,
            type,
            images,
            rates {
                metaScore,
                imdbRating,
                imdbVotes
            }
        }
    }
`

// Define a mutation named AddNewMovie
// When click addMovie Button to fire mutation AddNewMovie
const addNewMovie = gql`
    mutation AddNewMovie($name: String!, $genre: String!, $year: String!) { 
        addMovie(name: $name, genre: $genre, year: $year) {
            name
            genre
            year
        }
    }
`

//Form to add new movie 
const AddMovie = () => {
    // Getting from form
    const [movieName, setMovieName] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [movieYear, setMovieYear] = useState("");

    // newMovieData is what we inputted to the form
    const [newMovieData, { loading, error }] = useMutation(addNewMovie);

    if (loading) return <p className='loading'>'Submitting...'</p>;
    if (error) return <p className='error'>`Can not add your movie! ${error.message}`</p>;
    
    const submitMovie = (e) => {
        e.preventDefault(); // Prevent default action of parent component
        newMovieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year: movieYear
            },
            refetchQueries: [{
                query: listAllMovies
            }]
        }) // => These fields will be added to mutation 
        console.log("Movie Added!");
    }

    return ( 
        <div className='addMovie' id="addNewMovie">
            <form onSubmit={submitMovie}>
                <input type='text' placeholder='Movie Name' onChange={(e) => setMovieName(e.target.value)} required/>
                <input type='text' placeholder='Movie Genre' onChange={(e) => setMovieGenre(e.target.value)} required/>
                <input type='text' placeholder='Movie Year' onChange={(e) => setMovieYear(e.target.value)} required/>

                <button>Add Movie</button>
            </form>

            <div className='top'>
                <Link smooth to='#header' className='top-button'>Back to Top</Link>
            </div>
        </div>
    );
}
 
export default AddMovie;