import { MovieSession } from "./movie-session";
import { Seat } from "./seat";
import { User } from "./user";

export interface Ticket {
    id?:string,
    movie_session?: MovieSession,
    user?: User,
    date?: string,
    seat?: Seat

}
