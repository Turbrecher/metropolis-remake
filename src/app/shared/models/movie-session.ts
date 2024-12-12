import { Movie } from "./movie";
import { Room } from "./room";
import { Ticket } from "./ticket";

export interface MovieSession {

    id?:string,
    movie?: Movie,
    time?: string,
    room?: Room,
    tickets?: Array<Ticket>


}
