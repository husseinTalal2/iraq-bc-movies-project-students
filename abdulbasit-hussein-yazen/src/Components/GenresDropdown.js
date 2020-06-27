import React, { useState } from "react";
import { NavDropdown, Form } from "react-bootstrap";
function GenresDropdown(props) {
    const [genreId, setGenreId] = useState();
    const [genres, setGenres] = useState([]);
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const getGenres = () => {
        fetch(
            `${TMDB_BASE_URL}/genre/movie/list?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}`
        )
            .then((response) => response.json())
            .then((response) => setGenres(response.genres));
    };
    function handleClick(e) {
        setGenreId(e.target.id);
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
        )
            .then((response) => response.json())
            .then((data) => {
                props.setMovies(
                    data.results.filter((movie) =>
                        movie.genre_ids.includes(parseInt(genreId))
                    )
                );
            });
    }
    return (
        // <NavDropdown onClick={getGenres} title="Genres" id="basic-nav-dropdown">
        //     {genres.map((genre) => {
        //         return (
        //             <NavDropdown.Item
        //                 onClick={handleClick}
        //                 id={genre.id}
        //                 key={genre.id}
        //             >
        //                 {genre.name}
        //             </NavDropdown.Item>
        //         );
        //     })}
        // </NavDropdown>
        
            <Form>
            <Form.Control className="form-control-sm genres" placeholder="Genres" onClick={getGenres} as="select">
                <option disabled selected>Choose Genre</option>
                {genres.map((genre) => {
                    return (
                        <option
                            onClick={handleClick}
                            id={genre.id}
                            key={genre.id}
                        >
                            {genre.name}
                        </option>
                    );
                })}
            </Form.Control>
            </Form>
    );
}

export default GenresDropdown;
