import { Injectable } from '@angular/core';
import { Ticket } from '../../shared/models/ticket';
import { Url } from '../../shared/Utilities/Url';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getTickets() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<Array<Ticket>>(Url.api + 'tickets', { headers })
  }

  getTicket(id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<Ticket>(Url.api + 'tickets/' + id, { headers })
  }

  createTicket(ticketData: FormData) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.post<any>(Url.api + 'tickets', ticketData, { headers })
  }


  editTicket(ticketData: FormData, id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.post<any>(Url.api + 'tickets/' + id, ticketData, { headers })
  }

  deleteTicket(id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.delete<any>(Url.api + 'tickets/' + id, { headers })
  }

}
