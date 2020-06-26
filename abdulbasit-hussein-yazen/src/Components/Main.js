import React from "react";
import MovieGrid from "./MovieGrid";
function Main(props) {
    return (
        <main>
            <h1>hello from Main</h1>
            <MovieGrid moviesList={props.movsArray}/>
        </main>
    );
}

export default Main;
