import React, { useState, useEffect } from 'react'
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
// import movieTrailer from '../node_modules/ movie-trailer';
const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const imageClickHandler = (movie) => {
        // setTrailerUrl("8QkyLqmJCMM");
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie.name || movie.title)
                .then((url) => {
                    // https://www.youtube.com/watch?v=r4WRkiES9LU
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("i am the one who ", urlParams.get("v"))
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch(() => alert("movie trailer is not available at this moment!"));
        }
    };
    // console.log(movies);
    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movies.map(movie =>
                    <img
                        onClick={() => imageClickHandler(movie)}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseurl}${isLargeRow ? movie.backdrop_path : movie.poster_path}`}
                        alt={movie.name} />
                )}
            </div>

            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
