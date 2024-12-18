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

  getRoom(id?: number) {
    return this.http.get<Room>(Url.api + 'rooms/' + id)
  }

  createRoom(formData: FormData) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'rooms', formData, { headers })
  }


  editRoom(formData: FormData, id: number) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'rooms/' + id, formData, { headers })
  }


  deleteRoom(id: number) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.delete<any>(Url.api + 'rooms/' + id, { headers })
  }
}
