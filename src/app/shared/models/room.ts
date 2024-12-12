import { Seat } from "./seat";

export interface Room {
    id?:string,
    name?: string,
    rows?:number,
    cols?:number,
    seats?:Array<Seat>
}
