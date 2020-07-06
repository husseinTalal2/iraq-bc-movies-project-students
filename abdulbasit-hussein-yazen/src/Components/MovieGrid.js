import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { Container, Row, Col } from "react-bootstrap";
import { MovieContext } from "./MovieContext";
function MovieGrid() {
    const [state] = useContext(MovieContext);

    let movies;
    if (state !== !!undefined) {
        movies =
            state.selectedGenre == -1
                ? state.movies
                : state.movies.filter((movie) =>
                      movie.genre_ids.includes(state.selectedGenre)
                  );
    }

    return (
        <Container className="my-5">
            <Row>
                {movies !== !!undefined
                    ? movies.map((movie) => {
                          return (
                              <Col xs={12} md={4} lg={3} key={movie.id}>
                                  <MovieItem mov={movie} />
                              </Col>
                          );
                      })
                    : ""}
            </Row>
        </Container>
    );
}

export default MovieGrid;
