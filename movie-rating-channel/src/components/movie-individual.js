import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieIndividual = ({ movie }) => {
    const navigate = useNavigate();

    let movieName = movie.title.trim().split(" ");
    let toFindMovieName = "";
    if (movieName.length > 1) {
        for (let i=0;i<movieName.length;i++) {
            toFindMovieName += movieName[i] + "%20";
        }
    }
    // toFindMovieName = toFindMovieName.substring(0,toFindMovieName.length-1);
    
    return ( 
        <div 
            className='card' 
            style={{
                background:`url(${movie.poster})`,
                backgroundSize: "100%"
            }}
            onClick={() => navigate(`/movie/?title=${toFindMovieName}`)}
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