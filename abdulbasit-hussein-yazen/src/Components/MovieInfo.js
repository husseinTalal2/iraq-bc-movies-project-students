import React from "react";
import { Container, Badge } from "react-bootstrap";
function MovieInfo(props) {
    
    return (
        <>
            <Container>
                <h1>{props.movie.title}</h1>

                <h3>
                    {props.movie.hasOwnProperty("release_date")
                        ? props.movie.release_date.substring(0, 4)
                        : ""}
                </h3>
                <p className="my-4">{props.movie.overview}</p>
                <h4 className="my-4">{props.movie.runtime} minutes</h4>
                {props.movie.title
                    ? props.movie.genres.map((genre) => {
                          return (
                              <Badge
                                  className="mr-2"
                                  variant="info"
                                  pill
                                  key={genre.name}
                              >
                                  {genre.name}
                              </Badge>
                          );
                      })
                    : ""}
                <br />
                <Badge className="mt-4" variant="warning">
                    IMDB {props.movie.vote_average}
                </Badge>
            </Container>
        </>
    );
}

export default MovieInfo;
