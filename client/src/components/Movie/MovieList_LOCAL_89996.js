import React, { useState, useEffect } from "react";
import data from "../../FetchData/fetchData";
import Movie from "./Movie";
import "./Movie.css";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState({});

  useEffect(() => {
    const getMovieList = async (trend_name) => {
      try {
        let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
        console.log(result);
        setMovieList(result);
      } catch (error) {
        console.error("Error fetching movie list", error);
      }
    };
    getMovieList("movie"); 
  }, []);

  return (
    <div className="movie-list-container">
      {movieList.results ? (
        movieList.results.map((item, index) => (
          <Movie
            key={index}
            original_title={item.original_title || item.title}  
            overview={item.overview}
            poster_path={item.poster_path}
          />
        ))
      ) : (
        <p>Yükleniyor</p>
      )}
    </div>
  );
};

export default MovieList;
