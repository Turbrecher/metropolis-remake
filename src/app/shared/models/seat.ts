import { Room } from "./room";

export interface Seat {
    id?: number,
    type?: string,
    row?: number,
    col?: number,
    room?: Room
}
