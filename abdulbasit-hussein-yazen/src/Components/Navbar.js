import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown"
function NavB(props) {
    
    const [genres, setGenres] = useState([]);
    
    
    // const handleChange = (e) => {
    //     if (e.target.value) {
    //         setSpinner("d-block");
    //         fetch(constructUrl("search/movie", e.target.value))
    //             .then((response) => response.json())
    //             .then((response) => props.get(response.results));
    //     } else {
    //         setSpinner("d-none");
    //     }
    // };
    
  
    return (
        <Navbar bg="dark" className="text-white" expand="lg" variant="dark">
            <Navbar.Brand href="#home">! Netflix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <GenresDropdown setMovies={props.setMovies}/>
                </Nav>
                <SearchBox setMovies={props.setMovies}  />
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavB;
