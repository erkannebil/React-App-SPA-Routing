import React from 'react';
import NavbarComponent from './components/navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/Movie/MovieList'; 
import Home from './components/Home';
import Person from './components/Person/person';
import Tv from './components/Tv/tv';
import FooterComponent from './components/Footer/footer';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


export default function App () {

  return (
    <Router>
    <div>
      <NavbarComponent />      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/person" element={<Person />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
      <FooterComponent/>
    </div>
  </Router>


  );
}
