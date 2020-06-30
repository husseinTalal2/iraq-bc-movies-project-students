import React from "react";
import { Container, Button } from "react-bootstrap";
function MoviePage(props) {
    console.log(props.selectedMovie);

    return (
        <Container>
            <Button
                onClick={() => props.setIsMovieClicked(false)}
                className="primary"
            >
                Back
            </Button>

            <h1>{props.selectedMovie.title}</h1>
        </Container>
    );
}

export default MoviePage;
