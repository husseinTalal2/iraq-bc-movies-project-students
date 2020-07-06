import React, { useState, createContext, useReducer } from "react";

export const MovieContext = createContext();
const SET_MOVIES = "SET_MOVIES";
const SET_SELECTED_GENRE = "SET_SELECTED_GENRE";
function reducer(state, action) {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: action.movies };
        case SET_SELECTED_GENRE:
            return { ...state, selectedGenre: action.selectedGenre };
        default :
            console.log("from default");
            break;
            
    }
}
const initialState = {
    movies: [],
    selectedGenre: -1,
};
export function MoiveProvider(props) {
    //const [movies, setMovies] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MovieContext.Provider value={[state, dispatch]}>
            {props.children}
        </MovieContext.Provider>
    );
}
