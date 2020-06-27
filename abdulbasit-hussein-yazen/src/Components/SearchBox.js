import React, { useState } from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";
function SearchBox(props) {
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchText);
        const constructUrl = (path, query) => {
            return `${TMDB_BASE_URL}/${path}?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}&query=${query}`;
        };

        fetch(constructUrl("search/movie", searchText))
            .then((response) => response.json())
            .then((data) => {
                props.setMovies(data.results);
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            });
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search for movie..."
                className="mr-sm-2"
                required
            />
            {isLoading ? (
                <Spinner
                    className={isLoading ? "d-block" : "d-none"}
                    animation="border"
                    variant="success"
                />
            ) : (
                <Button type="submit" variant="outline-success">
                    Search
                </Button>
            )}
        </Form>
    );
}

export default SearchBox;
