import React from 'react';

import MovieIndividual from '../components/movie-individual';
import movies from './movie-dummy-data';

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