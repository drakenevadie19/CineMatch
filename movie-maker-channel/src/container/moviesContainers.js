import React from 'react';

import MovieIndividual from '../components/movie-individual';
import movies from './movie-dummy-data';
import { gql } from '@apollo/client';

// Define variable containing list of all movies

const MovieContainer = () => {
    return ( 
        <div className='movies'>
            {movies.map((movie, index) => (
                <MovieIndividual movie={movie} key={index}/>
            ))}
        </div>
    );
}
 
export default MovieContainer;