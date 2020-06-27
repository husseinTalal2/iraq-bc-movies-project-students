import React from "react";
import MovieGrid from "./MovieGrid";
function Main(props) {
    return (
        <main>
            <MovieGrid  movies={props.movies}/>
        </main>
    );
}
export default Main;
