import React, { useContext, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import {Route, Switch } from "react-router-dom";
import ActorInfo from "./ActorInfo";
import Search from "./Search";
import { MovieContext } from "./MovieContext";
import API from "../API";
function Main() {
    const [, dispatch] = useContext(MovieContext);

    useEffect(() => {
        API.fetching("/trending/movie/day").then((data) =>
            dispatch({ type: "SET_MOVIES", movies: data.results })
        );
    }, [dispatch]);
    return (
        <main>
            <Switch>
                <Route path="/" exact component={() => <MovieGrid />} />

                <Route path={`/movie/:id`} render={() => <MoviePage />} />
                <Route
                    path={`/people/:id`}
                    render={(props) => <ActorInfo {...props} />}
                />
                <Route path={`/search`} component={Search} />
            </Switch>
        </main>
    );
}
export default Main;
