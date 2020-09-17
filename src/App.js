import React from "react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { MoiveProvider} from "./Components/MovieContext";

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
