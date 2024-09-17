import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

const findAMovie = gql`
    query getAMovie($movieTitle: String!) {
        getMovie(movieTitle: $movieTitle) {
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

const MovieDetail = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const movieName = params.get("title");
    console.log(movieName);

    const { loading, error, data } = useQuery(findAMovie, {
        variables: { movieTitle: movieName.trim() }
    });
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <h1>Movie details</h1>
            <div style={{color: "white"}}>
                <h2>{data.getMovie.title}</h2>
                <p>{data.getMovie.genre}</p>
            </div>
        </>
        
    )
}

export default MovieDetail;