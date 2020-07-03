import React, {useContext} from "react";
import MovieItem from "./MovieItem";
import { Container, Row, Col } from "react-bootstrap";
import {MovieContext} from "./MovieContext";
function MovieGrid(props) {
    const [movies] = useContext(MovieContext);
    console.log(movies);
    return (
        <Container className= "my-5">
            <Row>
            {movies !== undefined?movies.map((movie) => {
                    return (
                        <Col xs={12} md={4} lg={3} key={movie.id}>
                            <MovieItem  mov={movie} setSelectedMovie={props.setSelectedMovie}/>
                        </Col>
                    );
                }):""}
            </Row>
        </Container>
    );
}

export default MovieGrid;
