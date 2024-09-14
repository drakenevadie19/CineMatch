import React from 'react';

import MovieIndividual from '../components/movie-individual';
// import movies from './movie-dummy-data';
import { gql, useQuery } from '@apollo/client';

// Define variable containing list of all movies
// Schema for queries, as syntax in GraphiQL
// When this component is render, firing this query
const listAllMovies = gql`
    query {
        listMovies {
            name
            genre
            year
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
    console.log(data);

    if (loading) return <p className='loading'>Loading...</p>;
    if (error) return <p className='error'>Error : {error.message}</p>;
  

    return ( 
        <div className='movies'>
            {data.listMovies.map((movie, index) => (
                <MovieIndividual movie={movie} key={index}/>
            ))}
        </div>
    );
}
 
export default MovieContainer;