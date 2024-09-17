import React from 'react';

const MovieIndividual = ({ movie }) => {
    return ( 
        <div 
            className='card' 
            style={{
                background:`url(${movie.poster})`,
                backgroundSize: "100%"
            }}
        >
            <div className='container'>
                <h2>{movie.title}</h2>
                <h4>{movie.genre}</h4>
                <h4>{movie.year}</h4>
            </div>
        </div>
     );
}
 
export default MovieIndividual;