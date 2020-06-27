import React from "react";
import MovieItem from "./MovieItem";
import { Container, Row, Col } from "react-bootstrap";
function MovieGrid(props) {
    return (
        <Container className= "my-5">
            <Row>
            {props.movies.map((movie) => {
                    return (
                        <Col xs={12} md={4} lg={3} key={movie.id}>
                            <MovieItem  mov={movie}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default MovieGrid;
