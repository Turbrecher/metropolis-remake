import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Ticket } from '../../shared/models/ticket';
import { Url } from '../../shared/Utilities/Url';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getUsers() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<Array<User>>(Url.api + 'users', { headers })
  }

  getUser(id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.get<User>(Url.api + 'users/' + id, { headers })
  }

  createUser(userData: FormData) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.post<any>(Url.api + 'users', userData, { headers })
  }

  editUser(id: number, userData: FormData) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.post<any>(Url.api + 'users/' + id, userData, { headers })
  }

  deleteUser(id: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }


    return this.http.delete<any>(Url.api + 'users/' + id, { headers })
  }
}
