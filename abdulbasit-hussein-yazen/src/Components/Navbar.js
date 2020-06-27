import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown"
function NavB(props) {
    const [spinner, setSpinner] = useState("d-none");
    const [genres, setGenres] = useState([]);
    
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
    
  
    return (
        <Navbar bg="light" className="text-white" expand="lg">
            <Navbar.Brand href="#home">! Netflix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <GenresDropdown get={props.get} genres={genres} set={setGenres}/>
                </Nav>
                <SearchBox handle={handleChange} spin={spinner} />
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavB;
