import React, { useState } from 'react';
import { NavDropdown } from "react-bootstrap";
function GenresDropdown(props) {
    const [genreId, setGenreId] = useState();
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const getGenres = () => {
        fetch(
            `${TMDB_BASE_URL}/genre/movie/list?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}`
        )
            .then((response) => response.json())
            .then((response) => props.set(response.genres));
    };
    function handleClick(e) {
        setGenreId(e.target.id);
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
        )
            .then((response) => response.json())
            .then((data) => {
                props.get(
                    data.results.filter((movie) =>
                        movie.genre_ids.includes(parseInt(genreId))
                    )
                );
                
            });
    }
    return (
        <NavDropdown onClick={getGenres} title="Genres" id="basic-nav-dropdown">
            {props.genres.map((genre) => {
                return (
                    <NavDropdown.Item
                        onClick={handleClick}
                        id={genre.id}
                        key={genre.id}
                    >
                        {genre.name}
                    </NavDropdown.Item>
                );
            })}
        </NavDropdown>
    );
}

export default GenresDropdown;
