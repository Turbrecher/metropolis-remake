import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Movie } from '../../shared/models/movie';
import { Url } from '../../shared/Utilities/Url';
import { Room } from '../../shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getRooms() {
    return this.http.get<Array<Room>>(Url.api + 'rooms')
  }
}
