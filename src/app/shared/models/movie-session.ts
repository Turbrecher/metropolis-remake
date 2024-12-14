import { Movie } from "./movie";
import { Room } from "./room";
import { Seat } from "./seat";
import { Ticket } from "./ticket";

export interface MovieSession {

    id?: number,
    movie?: Movie,
    time?: string,
    room?: Room,
    tickets?: Array<Ticket>,
    seat?: Seat


}
