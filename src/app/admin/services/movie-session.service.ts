import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieSession } from '../../shared/models/movie-session';
import { Url } from '../../shared/Utilities/Url';

@Injectable({
  providedIn: 'root'
})
export class MovieSessionService {

  constructor(private http: HttpClient) { }


  getAllMovieSessions() {
    return this.http.get<Array<MovieSession>>(Url.api + 'moviesessions')
  }
}
