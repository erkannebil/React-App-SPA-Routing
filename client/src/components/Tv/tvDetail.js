import React from "react";
import "./tv.css";

const TvDetail = (props) => {
    const { name, overview, poster_path } = props;

    const baseUrl = "https://image.tmdb.org/t/p/";
    const imageSize = "w300";  // Use a more generic image size
    const posterPath = poster_path;
    const fullImageUrl = `${baseUrl}${imageSize}${posterPath}`;

    return (
        <div className="tv">
            <h5>{name}</h5>
            <p>{overview}</p>
            <img src={fullImageUrl} alt="" />
        </div>
    );
};

export default TvDetail;
