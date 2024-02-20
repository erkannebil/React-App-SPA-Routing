import React from 'react';
import NavbarComponent from './components/navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/MovieList'; 
import Home from './components/Home';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


export default function App () {

  return (
    <Router>
    <div>
      <NavbarComponent />      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  </Router>


  );
}
