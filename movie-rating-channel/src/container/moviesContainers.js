import React from 'react';

import MovieIndividual from '../components/movie-individual';
// import movies from './movie-dummy-data';
import { gql, useQuery } from '@apollo/client';

// Old schema for old MongoDB Collection
// const listAllMovies = gql`
//     query {
//         listMovies {
//             name
//             genre
//             year
//         }
//     }
// `

// Define variable containing list of all movies
// Schema for queries, as syntax in GraphiQL
// When this component is render, firing this query
const listAllMovies = gql`
    query {
        listMovies{
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

const MovieContainer = () => {
    // useQuerry hook is to fire the query as soon as the component renders or re-render
    // The query is listAllMovies 
    // When the query is successful, it will be store in data variable
    //  error: if the query is failed
    //  loading: when the query is still processing, maybe because of low network
    const { loading, error, data } = useQuery(listAllMovies);
    // console.log(data);

    if (loading) return <p className='loading'>Loading...</p>;
    if (error) return <p className='error'>Error : {error.message}</p>;
    if (data.listMovies.length === 0) { // The DB is empty
        <p className='no-movies'>The Database is currently empty</p>
    }

    return ( 
        <div className='movies'>
            {data.listMovies.map((movie, index) => (
                <MovieIndividual movie={movie} key={index}/>
            ))}
        </div>
    );
}
 
export default MovieContainer;