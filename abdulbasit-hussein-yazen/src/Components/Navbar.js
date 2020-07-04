import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown";
import { GiFlame } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
function NavB() {
    const location = useLocation();
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
                    <Link to="/">
                        <Nav.Item>Home</Nav.Item>
                    </Link>
                    <GenresDropdown/>
                </Nav>
                {location.pathname === "/" ? (
                    <SearchBox />
                ) : (
                    ""
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavB;
