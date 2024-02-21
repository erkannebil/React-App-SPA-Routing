import React from "react";
import "./Movie.css";



const Movie = (props) => {
    const { original_title, overview, poster_path } = props



    const baseUrl = "https://image.tmdb.org/t/p/";
    const imageSize = "w300";
    const posterPath = poster_path;
    const fullImageUrl = `${baseUrl}${imageSize}${posterPath}`;     

    return (
        <div className="movie">
            <h5> {original_title}</h5>
            <p>{overview}</p>
            <img src={fullImageUrl} alt="" />

        </div>

    )
}

export default Movie;