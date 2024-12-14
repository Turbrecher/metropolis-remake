import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieSession } from '../../shared/models/movie-session';
import { Url } from '../../shared/Utilities/Url';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MovieSessionService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getAllMovieSessions() {
    return this.http.get<Array<MovieSession>>(Url.api + 'moviesessions')
  }

  getMovieSession(id?: number) {
    return this.http.get<MovieSession>(Url.api + 'moviesessions/' + id)
  }

  createMovieSession(movieSessionData: FormData) {

    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'moviesessions', movieSessionData, { headers })

  }


  editMovieSession(movieSessionData: FormData, id: number) {

    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'moviesessions/' + id, movieSessionData, { headers })

  }

  deleteMovieSession(id: number) {

    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.delete<any>(Url.api + 'moviesessions/' + id, { headers })

  }
}
