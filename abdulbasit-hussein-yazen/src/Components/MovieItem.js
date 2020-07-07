import React from "react";
import { Card, Button, Badge, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function MovieItem(props) {
    return (
        <Link to={`/movie/${props.mov.id}-${props.mov.title}`}>
            <Card className="shadow my-3 card-shadow">
                <Card.Img
                    variant="top"
                    src={
                        "https://image.tmdb.org/t/p/w300" +
                        props.mov.poster_path
                    }
                />
                <Card.Body>
                    <Card.Title>{props.mov.title}</Card.Title>
                    <Row className="justify-content-md-between">
                        <Col>
                            <Badge pill variant="primary">
                                {props.mov.hasOwnProperty("release_date")
                                    ? props.mov.release_date.substring(0, 4)
                                    : "no release date"}
                            </Badge>
                        </Col>
                        <Col>
                            <Badge pill variant="warning">
                                Rating {props.mov.vote_average}
                            </Badge>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default MovieItem;
