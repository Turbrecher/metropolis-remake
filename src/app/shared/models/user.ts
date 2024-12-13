import { Role } from "./role";
import { Ticket } from "./ticket";

export interface User {
    id?:string,
    name: string,
    surname: string,
    username: string,
    email: string,
    photo: string,
    tickets:Array<Ticket>,
    roles: Array<Role>
}
