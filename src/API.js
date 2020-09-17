const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const KEY = "?api_key=754ad3989128c7d8cfcc82e6591e7f2e";
const fetching = {
    fetching: json,
};
function json(path, query) {
    let full_url = TMDB_BASE_URL + path + KEY;
    full_url += query === undefined ? "" : "&query=" + query;
    return fetch(full_url).then((response) => response.json());
}

export default fetching;
