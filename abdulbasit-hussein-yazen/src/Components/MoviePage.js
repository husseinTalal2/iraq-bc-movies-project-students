import React, { useEffect, useState } from "react";
import { Container, Button, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
function MoviePage(props) {
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState({});
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${props.selectedMovie.id}?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => setMovie(data));
        fetch(
            `https://api.themoviedb.org/3/movie/${props.selectedMovie.id}/videos?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => setVideo(data));
        fetch(
            `https://api.themoviedb.org/3/movie/${props.selectedMovie.id}/credits?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => {
                setCast(data.cast);
            });
    }, []);

    return (
        <Container>
            <Link to="/">
                <Button className="primary my-4">Back</Button>
            </Link>
            <Row>
                <Col xs={12} md={4}>
                    <img
                        className="img-fluid rounded"
                        src={
                            "https://image.tmdb.org/t/p/w300" +
                            movie.poster_path
                        }
                    />
                </Col>
                <Col xs={12} md={8}>
                    <MovieInfo movie={movie} />
                </Col>
            </Row>
            <Carousel className="my-4" slidesPerPage={3} arrows infinite>
                {cast.length !== 0
                    ? cast.map((actor) => {
                          return (
                              <Link to={`/people/${actor.id}`}>
                                  <div className="m-2 ">
                                      <img
                                        className="img-fluid rounded "
                                          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                      />
                                      <h4>{actor.name}</h4>
                                  </div>
                              </Link>
                          );
                      })
                    : ""}
            </Carousel>
            {video.id ? (
                <div className="my-4 embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${video.results[0].key}?rel=0`}
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                ""
            )}
        </Container>
    );
}

export default MoviePage;
