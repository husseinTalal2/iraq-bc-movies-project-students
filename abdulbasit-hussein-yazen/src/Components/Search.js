import React, {useState, useEffect, useContext}from 'react'
import MovieGrid from "./MovieGrid"
import  {useParams, useLocation} from "react-router-dom"
import {MovieContext} from "./MovieContext"
function Search() {
    const [, setMovies] = useContext(MovieContext);
    const [query, setQuery] = useState("");
    const location = useLocation();
    useEffect(() => {
        setQuery(location.search.slice(3));
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${atob(
            "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
        )}&query=${query}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        
    }, [query])
    return (
      <MovieGrid />
    )
}

export default Search
