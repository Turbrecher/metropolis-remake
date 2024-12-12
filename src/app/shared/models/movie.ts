import { MovieSession } from "./movie-session";

export interface Movie {

    id?: number,
    title?: string,
    synopsis?: string,
    actors?: string,
    directors?: string,
    duration?: number,
    releaseDate?: string,
    genres?: string,
    pegi?: string,
    portrait?: string,
    trailer?: string,
    movie_sessions?: Array<MovieSession>

}
