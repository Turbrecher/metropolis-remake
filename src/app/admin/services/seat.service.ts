import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Ticket } from '../../shared/models/ticket';
import { Url } from '../../shared/Utilities/Url';
import { Seat } from '../../shared/models/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getSeats() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<Array<Seat>>(Url.api + 'seats', { headers })
  }

  getRoomSeats(roomId?: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.get<Array<Seat>>(Url.api + 'seats?room=' + roomId, { headers })
  }

  getSeat(id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<Seat>(Url.api + 'seats/' + id, { headers })
  }
}
