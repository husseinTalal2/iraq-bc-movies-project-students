import React, { useState, useEffect, useContext } from "react";
import { NavDropdown, Form } from "react-bootstrap";
import {MovieContext} from "./MovieContext";
function GenresDropdown(props) {
    const [, setMovies] = useContext(MovieContext);
    const [genres, setGenres] = useState([]);
    const [popular, setPopular] = useState([]);
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    useEffect(() => {
        fetch(
            `${TMDB_BASE_URL}/genre/movie/list?api_key=${atob(
                "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
            )}`
        )
            .then((response) => response.json())
            .then((response) => setGenres(response.genres));
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
        )
            .then((response) => response.json())
            .then((data) => setPopular(data.results));
    }, []);
        function handleChange(e) {

        const selectGenre = genres.find(ele => ele.name === e.target.value)
        e.target[0].disabled = true

        setMovies(
            popular.filter(movie => {
            return movie.genre_ids.includes(selectGenre.id)
          })
        )
      }
    
      return (
        <div>
          <Form>
            <Form.Control className="ml-4" as='select' onChange={handleChange}>
              <option disabled={false} value='hola'>
                Choose Genre
              </option>
              {genres.map(genre => (
                <option key={genre.id} id={genre.id}>
                  {genre.name}
                </option>
              ))}
            </Form.Control>
          </Form>
        </div>
      )
    }
    
    export default GenresDropdown
    
    