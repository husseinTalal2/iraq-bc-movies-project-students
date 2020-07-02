import React, { useState, useParams } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Main(props) {
    
    const [selectedMovie, setSelectedMovie] = useState(0);
    
    return (
        <main>
            
                <Switch>
                    
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <MovieGrid
                                
                                movies={props.movies}
                                setSelectedMovie={setSelectedMovie}
                            />
                        )}
                    />

                    <Route
                        path={`/movie/${selectedMovie.title}`}
                        render={() => (
                            <MoviePage
                                                           
                                selectedMovie={selectedMovie}
                            />
                        )}
                    />
                    <Route path={`/people/`}/>
                </Switch>
        
        </main>
    );
}
export default Main;
