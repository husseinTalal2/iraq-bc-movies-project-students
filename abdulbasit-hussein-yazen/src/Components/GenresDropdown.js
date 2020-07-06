import React, { useState, useEffect, useContext } from "react";
import { NavDropdown, Form } from "react-bootstrap";
import { MovieContext } from "./MovieContext";
function GenresDropdown(props) {
    const [, dispatch] = useContext(MovieContext);
    const [genres, setGenres] = useState([]);
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    useEffect(() => {
        fetch(
            `${TMDB_BASE_URL}/genre/movie/list?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}`
        )
            .then((response) => response.json())
            .then((response) => setGenres(response.genres));
    }, []);
    function handleChange(e) {
        dispatch({
            type: "SET_SELECTED_GENRE",
            selectedGenre: parseInt(e.target.id),
        });
    }

    return (
        <div>
            <Form>
                <Form.Control className="ml-4" as="select">
                    <option disabled={false} value="hola">
                        Choose Genre
                    </option>
                    {genres.map((genre) => (
                        <option
                            key={genre.id}
                            id={genre.id}
                            onClick={handleChange}
                        >
                            {genre.name}
                        </option>
                    ))}
                </Form.Control>
            </Form>
        </div>
    );
}

export default GenresDropdown;
