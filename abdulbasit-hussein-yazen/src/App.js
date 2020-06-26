import React, { useState } from 'react';
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";



function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = (movies)=> {
    setMovies(movies);
    console.log(movies);
}
  return (
    <>
      <Navbar get={getMovies} moviesArray={movies}/>
      <Main movsArray = {movies}/>
      <Footer />
    </>
  );
}

export default App;