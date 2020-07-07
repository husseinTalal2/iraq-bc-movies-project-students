import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { MovieContext } from "./MovieContext";
import API from "../API";
function GenresDropdown(props) {
    const [, dispatch] = useContext(MovieContext);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        API.fetching("/genre/movie/list").then((data) =>
            setGenres(data.genres)
        );
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
                    <option onClick={handleChange} disabled={false} id="-1">
                        All
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
