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

}
