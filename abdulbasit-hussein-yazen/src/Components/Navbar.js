import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown";
import { GiFlame } from "react-icons/gi";
import { Link } from "react-router-dom";
function NavB(props) {
    return (
        <Navbar bg="dark" className="text-white" expand="lg" variant="dark">
            <a href="/">
                <Navbar.Brand>
                    <GiFlame /> NetFlame
                </Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <GenresDropdown setMovies={props.setMovies} />
                </Nav>
                <SearchBox setMovies={props.setMovies} />
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavB;
