import { Seat } from "./seat";

export interface Room {
    id?:number,
    name?: string,
    rows?:number,
    cols?:number,
    seats?:Array<Seat>
}
