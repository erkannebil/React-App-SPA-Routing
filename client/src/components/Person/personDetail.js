import React from "react";
import "./person.css";

const PersonDetail = (props) => {
    const { name, popularity, profile_path } = props;

    const baseUrl = "https://image.tmdb.org/t/p/";
    const imageSize = "w300";  // Use a more generic image size
    const posterPath = profile_path;
    const fullImageUrl = `${baseUrl}${imageSize}${posterPath}`;

    return (
        <div className="person">
            <h5>{name}</h5>
            <p>{popularity}</p>
            <img src={fullImageUrl} alt="" />
        </div>
    );
};

export default PersonDetail;
