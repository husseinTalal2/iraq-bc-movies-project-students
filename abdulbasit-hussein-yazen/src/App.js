import React, { useState, useEffect, useContext } from "react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MoiveProvider, MovieContext } from "./Components/MovieContext";

function App() {
    return (
        <MoiveProvider>
            <Router>
                <>
                    <Navbar />
                    <Main />
                    <Footer />
                </>
            </Router>
        </MoiveProvider>
    );
}

export default App;
