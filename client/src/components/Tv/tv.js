import React, { useState, useEffect } from "react";
import data from "../../FetchData/fetchData";
import TvDetail from "./tvDetail";
import "./tv.css";

const TvList = (props) => {
  const [tvList, setTvList] = useState({});

  useEffect(() => {
    const getTvList = async (trend_name) => {
      try {
        let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
        console.log(result);
        setTvList(result);
      } catch (error) {
        console.error("Error fetching movie list", error);
      }
    };
    getTvList("tv"); 
  }, []);

  return (
    <div className="tv-list-container">
      {tvList.results ? (
        tvList.results.map((item, index) => ( 
          <TvDetail
            key={index}
            name={item.original_name} 
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

export default TvList;
