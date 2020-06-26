import React from "react";
import MovieItem from "./MovieItem";
import { Container, Row, Col } from "react-bootstrap";
function MovieGrid(props) {
    return (
        <Container>
            <Row>
                {props.moviesList.map((movie) => {
                    return (
                        <Col xs={12} md={4}>
                            <MovieItem mov={movie}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default MovieGrid;
