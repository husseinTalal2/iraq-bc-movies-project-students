import React, { useState, useEffect } from "react";
import { NavDropdown, Form } from "react-bootstrap";
function GenresDropdown(props) {
    const [genreId, setGenreId] = useState();
    const [genres, setGenres] = useState([]);
    const [popular, setPopular] = useState([]);
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    useEffect(() => {
        fetch(
            `${TMDB_BASE_URL}/genre/movie/list?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}`
        )
            .then((response) => response.json())
            .then((response) => setGenres(response.genres));
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
        )
            .then((response) => response.json())
            .then((data) => setPopular(data.results));
    }, []);
    function handleClick(e) {
        setGenreId(e.target.value);
        console.log(e.target.value);
        props.setMovies(
            popular.filter((movie) =>
                movie.genre_ids.includes(parseInt(genreId))
            )
        );
    }
    return (
        <Form>
            <Form.Control
                className="form-control-sm genres"
                placeholder="Genres"
                as="select"
                onChange={handleClick}
            >
                <option disabled selected>
                    Choose Genre
                </option>
                {genres.map((genre) => {
                    return (
                        <option
                            //onClick={handleClick}
                            value={genre.id}
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
