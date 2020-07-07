import React, {useEffect, useContext } from "react";
import MovieGrid from "./MovieGrid";
import { useLocation } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import API from "../API";
function Search() {
    const [, dispatch] = useContext(MovieContext);

    const location = useLocation();
    useEffect(() => {
        API.fetching("/search/movie", location.search.slice(3)).then((data) =>
            dispatch({ type: "SET_MOVIES", movies: data.results })
        );
    }, [location.search, dispatch]);
    return <MovieGrid />;
}

export default Search;
