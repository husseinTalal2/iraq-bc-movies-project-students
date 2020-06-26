import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
function NavB(props) {
    const [spinner, setSpinner] = useState("d-none");
    const [genres, setGenres] = useState([]);
    const [genreId, setGenreId] = useState();
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const constructUrl = (path, query) => {
        return `${TMDB_BASE_URL}/${path}?api_key=${atob(
            "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
        )}&query=${query}`;
    };
    const handleChange = (e) => {
        if (e.target.value) {
            setSpinner("d-block");
            fetch(constructUrl("search/movie", e.target.value))
                .then((response) => response.json())
                .then((response) => props.get(response.results));
        } else {
            setSpinner("d-none");
        }
    };
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
                props.get(
                    data.results.filter((movie) =>
                        movie.genre_ids.includes(parseInt(genreId))
                    )
                );
                // console.log(data.results.filter(movie => movie.genre_ids.includes(genreId)));
            });
    }
    return (
        <Navbar bg="dark" className="text-white" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown
                        onClick={getGenres}
                        title="Genres"
                        id="basic-nav-dropdown"
                    >
                        {genres.map((genre) => {
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
                </Nav>
                <SearchBox handle={handleChange} spin={spinner} />
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavB;
