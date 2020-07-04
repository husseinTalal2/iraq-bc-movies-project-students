import React, { useState, useEffect, useContext } from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { MovieContext } from "./MovieContext";

function SearchBox(props) {
    const [, setMovies] = useContext(MovieContext);
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        setTimeout(() =>setIsLoading(false));
    }
    const location = useLocation();
    console.log(location);
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
                <Link to={`/search?q=${searchText}`}>
                    <Button type="submit" variant="outline-success">
                        Search
                    </Button>
                </Link>
            )}
        </Form>
    );
}

export default SearchBox;
