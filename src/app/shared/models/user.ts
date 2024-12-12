import { Ticket } from "./ticket";

export interface User {
    id?:string,
    name: string,
    surname: string,
    username: string,
    email: string,
    tickets:Array<Ticket>
}
