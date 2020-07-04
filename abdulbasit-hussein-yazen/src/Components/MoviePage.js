import React, { useEffect, useState } from "react";
import { Container, Button, Badge, Row, Col } from "react-bootstrap";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
function MoviePage() {
    const location = useLocation();

    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState({});
    const [cast, setCast] = useState([]);
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    };
    const { id } = useParams();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${
                id.split("-")[0]
            }?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => setMovie(data));
        fetch(
            `https://api.themoviedb.org/3/movie/${
                id.split("-")[0]
            }/videos?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => setVideo(data));
        fetch(
            `https://api.themoviedb.org/3/movie/${
                id.split("-")[0]
            }/credits?api_key=754ad3989128c7d8cfcc82e6591e7f2e`
        )
            .then((response) => response.json())
            .then((data) => {
                setCast(data.cast);
            });
    }, []);

    return (
        <Container>
            <Button onClick={handleBack} className="primary my-4">
                Back
            </Button>

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
                {cast !== undefined
                    ? cast.map((actor) => {
                          return (
                              <Link
                                  to={`/people/${actor.id}-${actor.name}/this-is-test `}
                              >
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
