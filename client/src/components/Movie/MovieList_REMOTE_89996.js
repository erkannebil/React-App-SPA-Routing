import React, { useState, useEffect } from "react";
import data from "../../FetchData/fetchData";
import Movie from "./Movie";
import "./Movie.css";

import CustomButton from '../button';

const MovieList = (props) => {
  const [movieList, setMovieList] = useState({});
  const [page, setPage] = useState(1);

  // Declare getMovieList function outside of useEffect
  const getMovieList = async (trend_name, page) => {
    try {
      let result = await data.getTrendRequest(trend_name, data.time_window.week, page);
      console.log(result);
      setMovieList(result);
    } catch (error) {
      console.error("Error fetching movie list", error);
    }
  };

  useEffect(() => {
    // Initial fetch when component mounts
    getMovieList("movie", page);
  }, [page]);

  const handleButtonClick = () => {
    const newPage = page + 1; 
    console.log(newPage);
    setPage(newPage);
  };

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
      <CustomButton onClick={handleButtonClick} />
    </div>
  );
};

export default MovieList;
