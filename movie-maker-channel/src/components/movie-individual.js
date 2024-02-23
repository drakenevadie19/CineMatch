import React from 'react';

const MovieIndividual = ({ movie }) => {
    return ( 
        <div className='card'>
            <div className='container'>
                <h2>{movie.name}</h2>
                <h4>{movie.genre}</h4>
                <h4>{movie.year}</h4>
            </div>
        </div>
     );
}
 
export default MovieIndividual;