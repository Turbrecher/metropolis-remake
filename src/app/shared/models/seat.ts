import { Room } from "./room";

export interface Seat {
    id?:string,
    type?: string,
    row?: number,
    col?: number,
    room?: Room
}
