import React, { useState } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";

function Main(props) {
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({})
    console.log(isMovieClicked);
    return (
        <main>
            
            {isMovieClicked ? (
                <MoviePage setIsMovieClicked={setIsMovieClicked} selectedMovie={selectedMovie}/>
            ) : (
                <MovieGrid
                    isClicked={setIsMovieClicked}
                    movies={props.movies}
                    setSelectedMovie={setSelectedMovie}
                />
            )}
        </main>
    );
}
export default Main;
