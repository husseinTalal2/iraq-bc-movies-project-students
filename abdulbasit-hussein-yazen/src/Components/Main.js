import React, { useContext, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActorInfo from "./ActorInfo";
import Search from "./Search";
import { MovieContext } from "./MovieContext";
function Main() {
    const [, setMovies] = useContext(MovieContext);
  
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/trending/movie/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);
    return (
        <main>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => (
                        <MovieGrid />
                    )}
                />

                <Route
                    path={`/movie/:id`}
                    render={() => <MoviePage />}
                />
                <Route
                    path={`/people/:id/:test`}
                    render={(props) => <ActorInfo {...props} />}
                />
                <Route path={`/search`} component={Search}/>
            </Switch>
        </main>
    );
}
export default Main;
