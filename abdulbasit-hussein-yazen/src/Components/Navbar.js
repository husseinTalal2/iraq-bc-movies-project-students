import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, Spinner } from "react-bootstrap";
function NavB(props) {
    const [spinner, setSpinner] = useState("d-none");
    
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const handleChange = (e) => {
        if (e.target.value) {
            setSpinner("d-block");
        } else {
            setSpinner("d-none");
        }

        const constructUrl = (path, query) => {
            return `${TMDB_BASE_URL}/${path}?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}&query=${query}`;
        };

        fetch(constructUrl("search/movie", e.target.value))
        .then(response => response.json())
        .then(response => props.get(response.results))
        
    };
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <SearchBox handle={handleChange} spin={spinner} />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavB;
