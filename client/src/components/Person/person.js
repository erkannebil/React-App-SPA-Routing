import React, { useState, useEffect } from "react";
import data from "../../FetchData/fetchData";
import Person from "./personDetail";
import "./person.css";

const PersonList = (props) => {
  const [personList, setPersonList] = useState({});

  useEffect(() => {
    const getPersonList = async (trend_name) => {
      try {
        let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
        console.log(result);
        setPersonList(result);
      } catch (error) {
        console.error("Error fetching movie list", error);
      }
    };
    getPersonList("person"); 
  }, []);

  return (
    <div className="person-list-container">
      {personList.results ? (
        personList.results.map((item, index) => ( 
          <Person
            key={index}
            name={item.name}  
            profile_path={item.profile_path}
          />
        ))
      ) : (
        <p>Yükleniyor</p>
      )}
    </div>
  );
};

export default PersonList;
