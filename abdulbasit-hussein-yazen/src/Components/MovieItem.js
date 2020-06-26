import React from "react";
import { Card, Button, Badge, Col, Row } from "react-bootstrap";
function MovieItem(props) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w300" + props.mov.poster_path}
            />
            <Card.Body>
                <Card.Title>{props.mov.title}</Card.Title>
                <Row className="justify-content-md-between">
                    <Col>
                        <Badge pill variant="primary">
                            {props.mov.release_date.substring(0, 4)}
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
    );
}

export default MovieItem;
