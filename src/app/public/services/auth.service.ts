import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from '../../shared/Utilities/Url';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  register(registerData: FormData) {

    return this.http.post(Url.api + 'register', registerData)
  }

  login(loginData: FormData) {

    return this.http.post(Url.api + 'login', loginData)
  }

  //Function that gets the role of the authenticated user.
  getRole(token: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.get<any>(Url.api + "role", { headers })
  }


  //Function that retrieves profile data of the authenticated user.
  profile() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.get<User>(Url.api + "profile", { headers })
  }


  editProfile(profileData: FormData){
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<User>(Url.api + "profile", profileData, { headers })
  }

  //Function that logouts the user from the api DB (deletes token on db).
  logout() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post<any>(Url.api + "logout", {}, { headers })
  }


}
