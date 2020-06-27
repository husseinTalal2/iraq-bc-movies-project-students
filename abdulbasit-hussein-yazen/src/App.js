import React, { useState } from "react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";




function App() {
    
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([])
  window.addEventListener('DOMContentLoaded',() => {
      fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e")
      .then(response => response.json())
      .then(data =>{ 
        setTrending(data.results)
      })
    })

    return (
        <>
            <Navbar setMovies ={setMovies}/>
            <Main movies={movies.length === 0 ? trending:movies}/>
            <Footer />
        </>
    );
}

export default App;
